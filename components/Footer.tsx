import React from 'react';

const Footer: React.FC = () => {
  // Generate random balloon configurations
  const balloons = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    duration: `${10 + Math.random() * 10}s`,
    size: `${20 + Math.random() * 40}px`,
    color: ['bg-google-red', 'bg-google-blue', 'bg-google-yellow', 'bg-google-green'][Math.floor(Math.random() * 4)]
  }));

  return (
    <footer className="relative mt-auto overflow-hidden bg-slate-900 text-white">
      {/* Animated Gradient Background Overlay */}
      <div className="absolute inset-0 opacity-20 animate-liquid-bg z-0 pointer-events-none"></div>

      {/* Floating Balloons Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {balloons.map((b) => (
          <div
            key={b.id}
            className={`absolute rounded-full opacity-60 ${b.color} animate-float blur-sm`}
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: b.animationDelay,
              animationDuration: b.duration,
              bottom: '-100px'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <svg viewBox="0 0 40 40" className="w-8 h-8">
                 <circle cx="20" cy="20" r="14" stroke="#0F9D58" strokeWidth="3" fill="none" />
                 <circle cx="20" cy="20" r="10" stroke="#F4B400" strokeWidth="3" fill="none" />
                 <circle cx="20" cy="20" r="6" stroke="#DB4437" strokeWidth="3" fill="none" />
                 <circle cx="20" cy="20" r="2.5" fill="#4285F4" />
               </svg>
               <span className="font-bold text-lg">GDGC Directory</span>
            </div>
            <p className="text-slate-400 text-sm">
              Connecting developers, designers, and tech enthusiasts on campus.
            </p>
          </div>

          {/* Links */}
          <div>
             <h3 className="font-semibold text-lg mb-4">Community</h3>
             <ul className="space-y-2 text-slate-300">
               <li><a href="#" className="hover:text-google-blue transition-colors">Events</a></li>
               <li><a href="#" className="hover:text-google-blue transition-colors">Projects</a></li>
               <li><a href="#" className="hover:text-google-blue transition-colors">Blog</a></li>
               <li><a href="#" className="hover:text-google-blue transition-colors">Join Us</a></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-slate-400 text-sm mb-2">
              Student Union Building, Room 304<br />
              vit bhopal University Campus
            </p>
            <p className="text-slate-400 text-sm">
              vitbhopal@gdgc.example.com
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Google Developer Groups on Campus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;