import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;
  
  
  return (
    <li className="video-list-item" onClick={e => onVideoSelect(video)}>
      <div className="video-thumbnail">
        <img src={imageUrl} />
      </div>
      <div className="video-description">
        {video.snippet.title}
      </div>
    </li>
  )
}

export default VideoListItem;