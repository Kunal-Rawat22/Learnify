import React, { useState } from 'react';

const VideoPage = () => {
  const videos = [
    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/embed/video1' },
    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/video2' },
    { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/video3' },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]); // Default to first video

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200">
        <h1 className="text-3xl font-bold mb-4">Videos</h1>
        <div className="flex flex-col">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => handleVideoClick(video)}
              className={`px-4 py-2 rounded-md ${selectedVideo && selectedVideo.id === video.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600 hover:text-white mb-2`}
            >
              {video.title}
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src={selectedVideo.url}
            title={selectedVideo.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
