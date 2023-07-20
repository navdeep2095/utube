import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';

const YOUTUBE_VIDEO_API = process.env.REACT_APP_YOUTUBE_VIDEO_API

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  },[]);

  const fetchVideos = async () => {
    const videoData = await fetch(YOUTUBE_VIDEO_API);
    const videoDataJson = await videoData.json();
    setVideos(videoDataJson.items);
  }
  
  return videos.length === 0 ? <Shimmer /> : (
    <div className='flex flex-wrap'>
      {
        videos.map((video,index) => 
          (
            <Link key={index} to={'/watch?v='+video.id}>
              <VideoCard video={video}/>
            </Link>
          )
        )
      }
    </div>
  )
}

export default VideoContainer