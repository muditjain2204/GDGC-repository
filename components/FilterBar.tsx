import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { ROLES, LOCATIONS } from '../constants';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedRole: string;
  setSelectedRole: (r: string) => void;
  selectedLocation: string;
  setSelectedLocation: (l: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedRole,
  setSelectedRole,
  selectedLocation,
  setSelectedLocation
}) => {
  return (
    <div className="bg-white/80 dark:bg-[#0f172a]/60 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100 dark:border-slate-800 p-6 mb-8 sticky top-20 z-30 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        {/* Search Input - Google Style Pill with Gradient Border */}
        <div className="relative flex-grow w-full">
          {/* Gradient Border Container */}
          <div className="p-[2px] rounded-full animate-gradient-border bg-gradient-to-r from-google-blue via-google-red to-google-yellow">
            <div className="relative bg-white dark:bg-[#1e1e1e] rounded-full flex items-center">
               <Search className="absolute left-4 text-slate-400" size={20} />
               <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-transparent rounded-full focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
              />
              {/* Optional Camera Icon to match the 'image' feel (purely visual here) */}
              <div className="absolute right-4 flex gap-3 text-slate-400">
                 {/* <div className="hover:text-google-blue cursor-pointer transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                 </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 no-scrollbar">
          <div className="relative min-w-[140px] flex-1 md:flex-none">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 bg-blue-50/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-google-blue text-slate-900 dark:text-white cursor-pointer transition-colors hover:bg-blue-100/50 dark:hover:bg-slate-800"
            >
              {ROLES.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>

          <div className="relative min-w-[140px] flex-1 md:flex-none">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 bg-blue-50/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-google-blue text-slate-900 dark:text-white cursor-pointer transition-colors hover:bg-blue-100/50 dark:hover:bg-slate-800"
            >
              {LOCATIONS.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;