import React from 'react';
import { motion } from 'framer-motion';
import { Member } from '../types';
import { User, MapPin, Code } from 'lucide-react';

interface MemberCardProps {
  member: Member;
  onClick: (member: Member) => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${member.id}`}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={() => onClick(member)}
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 cursor-pointer transition-shadow duration-300 group overflow-hidden relative"
    >
      {/* Decorative gradient blob with Google Colors */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[linear-gradient(135deg,rgba(219,68,55,0.2),rgba(244,180,0,0.2),rgba(66,133,244,0.2),rgba(15,157,88,0.2))] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div layoutId={`avatar-${member.id}`} className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-md">
            <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 bg-white dark:bg-slate-900 rounded-full p-1 shadow-sm">
             <div className="bg-google-blue w-4 h-4 rounded-full"></div>
          </div>
        </motion.div>

        <motion.h3 layoutId={`name-${member.id}`} className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          {member.name}
        </motion.h3>

        <motion.span layoutId={`role-${member.id}`} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-4">
          {member.role}
        </motion.span>

        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
          {member.bio}
        </p>

        <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500 dark:text-slate-500">
           <div className="flex items-center gap-1">
             <MapPin size={14} />
             {member.location}
           </div>
           <div className="flex items-center gap-1">
             <Code size={14} />
             {member.skills.length} skills
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;