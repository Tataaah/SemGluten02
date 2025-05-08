import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes: number;
  initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialMinutes, 
  initialSeconds 
}) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Check if timer is stored in localStorage
    const storedEndTime = localStorage.getItem('countdownEndTime');
    
    if (storedEndTime) {
      const endTime = parseInt(storedEndTime);
      const currentTime = new Date().getTime();
      const remainingTime = Math.max(0, endTime - currentTime);
      
      if (remainingTime > 0) {
        setMinutes(Math.floor(remainingTime / (60 * 1000)));
        setSeconds(Math.floor((remainingTime % (60 * 1000)) / 1000));
      } else {
        // Timer expired, reset to initial values
        resetTimer();
      }
    } else {
      // No stored timer, set end time in localStorage
      const endTime = new Date().getTime() + (initialMinutes * 60 + initialSeconds) * 1000;
      localStorage.setItem('countdownEndTime', endTime.toString());
    }
    
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        resetTimer();
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [minutes, seconds, initialMinutes, initialSeconds]);

  const resetTimer = () => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
    const endTime = new Date().getTime() + (initialMinutes * 60 + initialSeconds) * 1000;
    localStorage.setItem('countdownEndTime', endTime.toString());
  };

  return (
    <div className="font-mono font-bold">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
};

export default CountdownTimer;