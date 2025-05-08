import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { formatDate } from '../utils/formatDate';
import CountdownTimer from './ui/CountdownTimer';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const currentDate = formatDate(new Date());
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full ${isSticky ? 'fixed top-0 left-0 right-0 bg-offWhite/90 backdrop-blur-md shadow-md z-50 py-2' : 'py-4'} transition-all duration-300`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-600 font-medium">
            ATUALIZADO EM: <span className="font-semibold">{currentDate}</span>
          </p>
          
          <div className="flex items-center gap-2 bg-terracota/90 text-white px-4 py-2 rounded-full animate-pulse-slow">
            <Timer size={18} />
            <p className="text-sm font-semibold">A OFERTA ACABA EM:</p>
            <CountdownTimer initialMinutes={30} initialSeconds={0} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;