import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import CommentList from './CommentList';

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
        <>
            <CommentList checkForReplies={commentsData?.replies != null} commentsData={commentsData} />
        </>
    )
}
export default CommentsContainer