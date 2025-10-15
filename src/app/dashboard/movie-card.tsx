"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

type MovieCardProps = {
  thumbnail: string;
  title: string;
  rating: number;
  description: string;
};

export const renderStars = (rating: number) => {
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

const MovieCard = ({
  thumbnail,
  title,
  rating,
  description,
}: MovieCardProps) => {
  const [imgSrc, setImgSrc] = useState<string>(thumbnail);

  return (
    <div className="group bg-[#e5e3d4] hover:shadow-xl/30 overflow-hidden duration-500 ease-in-out rounded-xl">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-2/3 aspect-video overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            width={1000}
            height={1000}
            // className="object-cover duration-700 ease-in-out group-hover:scale-200"
            className="object-cover h-full object-center group-hover:scale-150 duration-300"
            onError={() => setImgSrc("/images/register.png")}
          />
        </div>

        <div className="w-full xl:w-1/3">
          <div className="p-4 flex flex-col justify-between h-full">
            <h3
              className="text-xl font-bold text-[#2D2D2F] mb-2 h-auto"
              title={title}
            >
              {title.length > 35 ? title.slice(0, 35) + "..." : title}
            </h3>

            <div className="text-gray-500 h-full">
              {description.length > 65
                ? description.slice(0, 65) + "..."
                : description}
            </div>

            <div
              className="flex items-center py-2 px-3 mt-4 xl:mt-0 rounded-sm justify-between h-auto bg-[#2D2D2F]"
              style={{ lineHeight: 0 }}
            >
              <div className="flex space-x-1">
              {renderStars(rating)}
              </div>
              <span className="text-sm text-[#e5e3d4] ml-2">
                {rating.toFixed(1)}/5
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-200"
          onError={() => setImgSrc("/images/register.png")}
        />
      </div> */}

      {/* <div className="p-4 flex flex-col justify-between h-auto">
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
      </div> */}
    </div>
  );
};

export default MovieCard;
