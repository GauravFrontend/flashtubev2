// src/pages/page.tsx
import VideoCard from "@/app/dashboard/VideoCard";
import React from "react";

const Page = () => {
  // Array of dummy data to map over
  const videoCards = [
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "12:34",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 1",
      channelName: "Channel Name 1",
      views: 123456,
      timeAgo: "1 day ago",
    },
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "10:05",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 2",
      channelName: "Channel Name 2",
      views: 654321,
      timeAgo: "2 days ago",
    },
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "08:30",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 3",
      channelName: "Channel Name 3",
      views: 789123,
      timeAgo: "3 days ago",
    },
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "05:45",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 4",
      channelName: "Channel Name 4",
      views: 456789,
      timeAgo: "4 days ago",
    },
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "11:50",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 5",
      channelName: "Channel Name 5",
      views: 321987,
      timeAgo: "5 days ago",
    },
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "09:15",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 6",
      channelName: "Channel Name 6",
      views: 987654,
      timeAgo: "6 days ago",
    },
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "11:50",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 5",
      channelName: "Channel Name 5",
      views: 321987,
      timeAgo: "5 days ago",
    },
    {
      thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
      duration: "09:15",
      profileImage: "https://via.placeholder.com/40.png?text=Profile",
      title: "Example Video Title 6",
      channelName: "Channel Name 6",
      views: 987654,
      timeAgo: "6 days ago",
    },
  ];

  return (
    <>
      <div className=" w-full h-full p-4">
        {/* Flex container for video cards */}
        <div className="flex flex-wrap justify-start gap-3 pl-4">
          {videoCards.map((video, index) => (
            <div key={index}>
              <VideoCard
                thumbnail={video.thumbnail}
                duration={video.duration}
                profileImage={video.profileImage}
                title={video.title}
                channelName={video.channelName}
                views={video.views}
                timeAgo={video.timeAgo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
