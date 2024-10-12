"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoCard from "@/app/dashboard/VideoCard";

interface VideoType {
  _id: string;
  videoFile: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: number;
  views: number;
  isPublished: boolean;
  owner: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Page = () => {
  const router = useRouter();
  const [videos, setVideos] = useState<VideoType[]>(); // State to store videos
  const [loading, setLoading] = useState(true); // Loading state for fetching

  // Fetch the videos from API on component mount
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/users/videos"
        );
        const data = await response.json();

        if (data.success) {
          setVideos(data.data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false); // Stop loading once fetch is done
      }
    };

    fetchVideos();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading...</div>; // Render loading state while fetching
  }

  return (
    <>
      <div className="w-full h-full p-4">
        {/* Flex container for video cards */}
        <div className="flex flex-wrap justify-start gap-3 pl-4">
          {videos?.map((video) => (
            <div
              key={video._id}
              onClick={() => {
                router.push("/dashboard/videoPage");
              }}
            >
              <VideoCard
                thumbnail={
                  "https://via.placeholder.com/320x180.png?text=Video+Thumbnail"
                }
                duration={video.duration.toFixed(2)} // Format duration
                profileImage="https://via.placeholder.com/40.png?text=Profile" // Placeholder profile image
                title={video.title}
                channelName={video.owner} // Assuming 'owner' is the channel name
                views={video.views}
                timeAgo={new Date(video.createdAt).toLocaleDateString()} // Display creation date as time ago
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
