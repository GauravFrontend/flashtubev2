// src/components/VideoCard.tsx
import React from "react";
import Image from "next/image"; // Import Next.js Image component

interface VideoCardProps {
  thumbnail: string;
  duration: string;
  profileImage: string;
  title: string;
  channelName: string;
  views: number;
  timeAgo: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  duration,
  profileImage,
  title,
  channelName,
  views,
  timeAgo,
}) => {
  return (
    <div className="w-[290px] h-64 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail section */}
      <div className="relative">
        <Image
          src={thumbnail}
          alt="Video Thumbnail"
          width={320} // Provide the width
          height={180} // Provide the height
          className="w-full h-auto object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* Video Info Section */}
      <div className="flex pt-2">
        {/* Profile Icon */}
        <div className="flex h-[60px] w-[60px] p-3">
          <Image
            src={profileImage}
            alt="Channel Icon"
            width={40} // Provide the width for the profile icon
            height={40} // Provide the height for the profile icon
            className="rounded-full mr-3"
          />
        </div>

        {/* Title and other details */}
        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-900 truncate">{title}</h3>

          <div className="text-sm text-gray-600">
            <span>{channelName}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>{views} views</span>
            <span>{timeAgo}</span>
          </div>
        </div>

        {/* Three dots icon */}
        <div className="ml-3">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v.01M12 12v.01M12 18v.01"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
