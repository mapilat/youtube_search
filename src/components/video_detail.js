import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){return <div>Loading...</div>}

  const videoUrl =`http://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="video-wrapper">
        <iframe src={videoUrl} />
      </div>
      <div className="video-detail-details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;