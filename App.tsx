import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import MemberCard from './components/MemberCard';
import MemberDetailModal from './components/MemberDetailModal';
import FilterBar from './components/FilterBar';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import { MemberService } from './services/api';
import { Member } from './types';
import { Users } from 'lucide-react';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Selection State
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Initial Data Fetch
  useEffect(() => {
    // Start fetching data immediately, but only show after splash
    const fetchData = async () => {
      try {
        const data = await MemberService.getAll();
        setMembers(data);
      } catch (err) {
        setError('Failed to load members.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter Logic
  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            member.bio.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = selectedRole === 'All' || member.role === selectedRole;
      const matchesLocation = selectedLocation === 'All' || member.location === selectedLocation;
      
      return matchesSearch && matchesRole && matchesLocation;
    });
  }, [members, searchQuery, selectedRole, selectedLocation]);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Fixed 4-Corner Gradients (Do not move with scroll) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Top Left: Green */}
         <div className="absolute -top-32 -left-32 w-96 h-96 bg-google-green rounded-full mix-blend-normal filter blur-[100px] opacity-20 dark:opacity-10"></div>
         
         {/* Top Right: Red */}
         <div className="absolute -top-32 -right-32 w-96 h-96 bg-google-red rounded-full mix-blend-normal filter blur-[100px] opacity-20 dark:opacity-10"></div>
         
         {/* Bottom Left: Blue */}
         <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-google-blue rounded-full mix-blend-normal filter blur-[100px] opacity-20 dark:opacity-10"></div>
         
         {/* Bottom Right: Yellow */}
         <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-google-yellow rounded-full mix-blend-normal filter blur-[100px] opacity-20 dark:opacity-10"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-blue-100 dark:border-slate-800 transition-colors duration-300 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             {/* Custom Concentric Circles Logo */}
             <div className="relative w-8 h-8 flex items-center justify-center">
               <svg viewBox="0 0 40 40" className="w-10 h-10">
                 {/* Green Ring */}
                 <circle cx="20" cy="20" r="14" stroke="#0F9D58" strokeWidth="3" fill="none" />
                 {/* Yellow Ring */}
                 <circle cx="20" cy="20" r="10" stroke="#F4B400" strokeWidth="3" fill="none" />
                 {/* Red Ring */}
                 <circle cx="20" cy="20" r="6" stroke="#DB4437" strokeWidth="3" fill="none" />
                 {/* Blue Ring (Inner Dot/Ring) */}
                 <circle cx="20" cy="20" r="2.5" fill="#4285F4" />
               </svg>
             </div>
             <span className="font-bold text-xl tracking-tight animate-text-flow">
               GDGC Directory
             </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Hero Title with Waving Gradient */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-slate-900 dark:text-white">
            <span className="animate-text-flow inline-block pb-1">
              Meet the Team
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Discover the amazing people building the future at our Google Developer Groups on Campus chapter.
          </p>
        </div>

        {/* Filter Controls */}
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        {/* Content Area */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
             <div className="w-12 h-12 border-4 border-slate-200 border-t-google-blue rounded-full animate-spin mb-4"></div>
             <p className="text-slate-500">Loading members...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <>
            {filteredMembers.length === 0 ? (
               <div className="text-center py-20 text-slate-500">
                 <Users size={48} className="mx-auto mb-4 opacity-20" />
                 <p className="text-lg">No members found matching your criteria.</p>
                 <button 
                   onClick={() => {
                     setSearchQuery('');
                     setSelectedRole('All');
                     setSelectedLocation('All');
                   }}
                   className="mt-4 text-google-blue hover:underline"
                 >
                   Clear filters
                 </button>
               </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredMembers.map((member) => (
                  <MemberCard 
                    key={member.id} 
                    member={member} 
                    onClick={(m) => setSelectedMemberId(m.id)} 
                  />
                ))}
              </motion.div>
            )}
          </>
        )}
      </main>

      {/* New Animated Footer */}
      <Footer />

      {/* Detail Modal */}
      {selectedMemberId && (
        <MemberDetailModal 
          memberId={selectedMemberId} 
          onClose={() => setSelectedMemberId(null)} 
        />
      )}
    </div>
  );
};

export default App;