import React from 'react'

const VideoCard = ({video}) => {
  console.log(video);
  // const { snippet, statistics } = information;
  // const {channelTitle, title, thumbnails} = snippet;
  // console.log(thumbnails.high, title);

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={video?.snippet?.thumbnails?.high?.url} />
      <ul>
        <li className='font-bold'>{video?.snippet?.title}</li>
        <li>{video?.snippet?.channelTitle}</li>
        <li>{video?.statistics?.viewCount} <span>Views</span></li>
      </ul>
    </div>
  )
}

export default VideoCard