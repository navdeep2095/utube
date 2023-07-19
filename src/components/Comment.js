import React from 'react'

const Comment = ({checkForReplies, comment}) => {
  return checkForReplies ? 
    <>
        <img className='w-8 h-8' alt="user" src={comment?.snippet?.authorProfileImageUrl} />
        <p className='font-bold'>{comment?.snippet?.authorDisplayName}</p>
        <p>{comment?.snippet?.textDisplay}</p>
    </>
  
    :
    <>
        <img className='w-8 h-8' alt="user" src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
        <p className='font-bold'>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
        <p>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
    </>
  
}

export default Comment;