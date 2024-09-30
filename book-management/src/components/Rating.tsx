// src/components/Rating.tsx
import React from 'react';

interface RatingProps {
  onRate: (rating: number) => void;
  currentRating?: number; // Accept current rating
}

const Rating: React.FC<RatingProps> = ({ onRate, currentRating }) => {
  const handleRate = (rating: number) => {
    onRate(rating);
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} onClick={() => handleRate(index + 1)}>
          {index < (currentRating || 0) ? '★' : '☆'} {/* Show filled star for current rating */}
        </span>
      ))}
    </div>
  );
};

export default Rating;
