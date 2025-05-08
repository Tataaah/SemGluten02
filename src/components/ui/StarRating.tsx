import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ value, size = 20 }) => {
  return (
    <div className="flex items-center justify-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < value ? '#FFD700' : 'none'}
          stroke={i < value ? '#FFD700' : '#D1D5DB'}
          className={i < value ? 'text-yellow-500' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

export default StarRating;