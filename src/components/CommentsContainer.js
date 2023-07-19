import React, { useEffect, useState } from 'react'
// import logo from '../images/user-3296.svg';
// import { YOUTUBE_COMMENTS } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
// const commentsData = [
//     {
//         name:'navdeep',
//         text: 'Hey this is my first comment',
//         replies: []
//     },
//     {
//         name:'Kanu',
//         text: 'Hey this is my first comment',
//         replies: [{
//             name:'Manu',
//             text: 'Hey this is my first comment',
//             replies: [{
//                 name:'Shally',
//                 text: 'Hey this is my first comment',
//                 replies: []
//             }]
//         }]
//     },
//     {
//         name:'Prabhleen',
//         text: 'Hey this is my first comment',
//         replies: []
//     },
//     {
//         name:'Mummy',
//         text: 'Hey this is my first comment',
//         replies: []
//     },
//     {
//         name:'Dady',
//         text: 'Hey this is my first comment',
//         replies: []
//     },

// ];
// const Comment = ({data}) => {
//     const {name, text, replies} = data;
//     return <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
//         <img className='w-8 h-8' alt="user" src={logo} />
//         <div className='px-3'>
//             <p className='font-bold'>{name}</p>
//             <p>{text}</p>
//             {/* <p>{replies}</p>~ */}
//         </div>
//     </div>
// }

// const CommentsList = ({comments}) => {
//     console.log("comments:"+comments);
//     return comments?.map((comment, index) => (
//         <>
//             <Comment key={index} data={comment}/>
//             <div className='pl-5 border border-l-black ml-5'>
//                 <CommentsList comments={comment.replies}/>
//             </div>
//         </>
//     ));
// }

const CommentsContainer = () => {
    const [searchParams] = useSearchParams();
    const [commentsData, setCommentsData] = useState([]);
    useEffect(()=>{
        getCommentsData();
    },[]);
        // commentsData[i].item.
    const getCommentsData = async () => {
        const data = await fetch(process.env.REACT_APP_YOUTUBE_COMMENTS+searchParams.get("v"));
        const json= await data.json();
        setCommentsData(json.items)
        console.log(json.items);
    }
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments: </h1>
            {/* <CommentsList comments={commentsData}/> */}
            {/* <CommentsList comments={getCommentsData()}/> */}
            {/* Dev needs to implement according api requirements */}
                <>
                
                {/* <h1>Total Comments: {commentsData.length}</h1> */}
                {commentsData?.map((comment,index)=>(
                    <div className='grid grid-flow-row w-[990px] shadow-sm bg-gray-100 rounded-lg my-4 px-3' key={comment.id}>
                        <img className='w-8 h-8' alt="user" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                        <p className='font-bold'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                        <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>   
                    </div>
                    
                ))}
                </>
            
        </div>
    )
}
export default CommentsContainer