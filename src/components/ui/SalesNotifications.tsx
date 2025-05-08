import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { getRandomName } from '../../utils/randomNames';

const SalesNotifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    name: '',
    time: ''
  });

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      showRandomNotification();
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showRandomNotification = () => {
    const name = getRandomName();
    const minutes = Math.floor(Math.random() * 30) + 1;
    
    setCurrentNotification({
      name,
      time: `${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`
    });
    
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next notification (between 20 and 40 seconds)
      const nextNotificationDelay = Math.floor(Math.random() * 20000) + 20000;
      setTimeout(showRandomNotification, nextNotificationDelay);
    }, 5000);
  };

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-lg border border-begeNatural p-4 max-w-xs transform transition-all duration-500 ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0'
      }`}
    >
      <button 
        className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
        onClick={() => setIsVisible(false)}
      >
        <X size={16} />
      </button>
      
      <div className="flex items-center gap-3">
        <div className="bg-terracota/20 p-2 rounded-full">
          <ShoppingBag size={24} className="text-terracota" />
        </div>
        
        <div>
          <p className="text-sm font-semibold">{currentNotification.name}</p>
          <p className="text-xs text-gray-600">comprou há {currentNotification.time}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotifications;