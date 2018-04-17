import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // if(!props.videos.length) return <div>Loading</div>
  const videoItems = props.videos.map((video)=>{
    return (
      <VideoListItem 
      onVideoSelect={props.onVideoSelect} 
      key={video.etag} 
      video={video}/>);
  });

  return (
    <div className="video-list">
      <ul>
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;

//ul  className="col-md-4 list-group"

