import React from 'react'
import Comment from './Comment';

// Utube api design in such a way that data fields for snippet in replies under the comments isn't same as comments snippet for top level component so I have to make modification in Comment component to adjust this difference in data fields by providing extra prop checkForreplies if it is true then render it accordingly
const CommentList = ({checkForReplies, commentsData}) => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        {commentsData?.map(comment=>(
            <div className='grid grid-flow-row  shadow-sm bg-gray-100 rounded-lg my-4 px-3' key={comment.id}>
                <Comment checkForReplies={checkForReplies} key={comment.id} comment={comment}/>
                {comment?.replies && <div className='pl-5 border border-l-black ml-5'>
                    <CommentList checkForReplies={comment?.replies != null} commentsData={comment?.replies?.comments}/>
                </div>}
            </div>
        ))}
    </div>
  )
}

export default CommentList;