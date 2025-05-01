import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [timeLeft, setTimeLeft] = useState({
    minutes: 30,
    seconds: 0
  });

  // Update current date
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft(prev => ({
          ...prev,
          seconds: prev.seconds - 1
        }));
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          minutes: timeLeft.minutes - 1,
          seconds: 59
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formattedDate = format(currentDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  
  return (
    <header className="sticky top-0 z-50 bg-offWhite/95 backdrop-blur-sm shadow-sm">
      <div className="container py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="text-cinzaPardo text-sm mb-2 md:mb-0">
          <span className="font-medium">ATUALIZADO EM:</span> {formattedDate}
        </div>
        
        <div className="countdown-badge flex items-center gap-2 animate-pulse-slow">
          <Clock className="h-4 w-4" />
          <span className="font-bold">A OFERTA ACABA EM:</span>
          <span className="font-mono">{`${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;