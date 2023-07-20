import React from 'react'

const VideoCard = ({video}) => {
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={video?.snippet?.thumbnails?.high?.url} alt='Thumbnails'/>
      <ul>
        <li className='font-bold'>{video?.snippet?.title}</li>
        <li>{video?.snippet?.channelTitle}</li>
        <li>{video?.statistics?.viewCount} <span>Views</span></li>
      </ul>
    </div>
  )
}

export default VideoCard