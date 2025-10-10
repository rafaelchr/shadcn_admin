"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

type MovieCardProps = {
  thumbnail: string;
  title: string;
  rating: number;
};

const MovieCard = ({ thumbnail, title, rating }: MovieCardProps) => {
  const [imgSrc, setImgSrc] = useState<string>(thumbnail);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="text-yellow-400 w-4 h-4" />);
      } else if (i - rating < 1) {
        stars.push(<StarHalf key={i} className="text-yellow-400 w-4 h-4" />);
      } else {
        stars.push(<Star key={i} className="text-gray-600 w-4 h-4" />);
      }
    }

    return stars;
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-gray-700">
      <div className="relative h-64 w-full">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-opacity duration-500 hover:opacity-80"
          onError={() => setImgSrc("/images/register.png")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      <div className="p-4 flex flex-col justify-between h-auto">
        <h3
          className="text-xl font-bold text-white mb-2 truncate"
          title={title}
        >
          {title}
        </h3>

        <div className="flex items-center space-x-1">
          {renderStars()}
          <span className="text-sm text-gray-400 ml-2">
            {rating.toFixed(1)}/5
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
