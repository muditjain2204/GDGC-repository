import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Member } from '../types';
import { X, MapPin, Calendar, Mail, Github, Linkedin, Twitter, Briefcase, User } from 'lucide-react';
import { MemberService } from '../services/api';

interface MemberDetailModalProps {
  memberId: string | null;
  onClose: () => void;
}

const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ memberId, onClose }) => {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (memberId) {
      setLoading(true);
      // Backend fetch task implementation: GET /members/:id
      MemberService.getById(memberId).then(data => {
        if (data) setMember(data);
        setLoading(false);
      });
    } else {
      setMember(null);
    }
  }, [memberId]);

  if (!memberId) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        
        <motion.div
          layoutId={`card-${memberId}`}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full text-slate-800 dark:text-white transition-colors z-20"
          >
            <X size={20} />
          </button>

          {loading ? (
             <div className="h-64 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-google-blue"></div>
             </div>
          ) : member ? (
            <>
              {/* Header with Google Colors and Waving Water Animation */}
              <div className="h-32 animate-liquid-bg relative">
                 <div className="absolute -bottom-12 left-8">
                    <motion.div layoutId={`avatar-${member.id}`} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden bg-white">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </motion.div>
                 </div>
              </div>

              <div className="pt-16 pb-8 px-8 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
                   <div>
                     <motion.h2 layoutId={`name-${member.id}`} className="text-3xl font-bold text-slate-900 dark:text-white">
                       {member.name}
                     </motion.h2>
                     <motion.div layoutId={`role-${member.id}`} className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-google-blue/10 text-google-blue">
                          {member.role}
                        </span>
                        <span className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                           <MapPin size={14} className="mr-1" /> {member.location}
                        </span>
                     </motion.div>
                   </div>
                   
                   <div className="flex gap-2 mt-4 sm:mt-0">
                     {member.socials?.github && (
                       <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                         <Github size={20} />
                       </a>
                     )}
                     {member.socials?.linkedin && (
                       <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                         <Linkedin size={20} />
                       </a>
                     )}
                     {member.socials?.twitter && (
                       <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                         <Twitter size={20} />
                       </a>
                     )}
                   </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                   <div className="sm:col-span-2 space-y-6">
                      <section>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                           <User size={18} /> About
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {member.bio}
                        </p>
                      </section>
                      
                      <section>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Briefcase size={18} /> Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </section>
                   </div>
                   
                   <div className="sm:col-span-1 space-y-6">
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Member Info</h4>
                        <div className="space-y-3 text-sm">
                           <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                              <Calendar size={16} />
                              <span>Joined {new Date(member.joinedDate).toLocaleDateString()}</span>
                           </div>
                           <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                              <Mail size={16} />
                              <span className="truncate">{member.email}</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-500">Member not found</div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MemberDetailModal;