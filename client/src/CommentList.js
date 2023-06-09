/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
// @ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";


export default ({postId}) => {
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    };
    useEffect(() => {
        fetchComments();
    },[]);
    
    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });

    return <div>
        <ul>
            {renderedComments}
        </ul>
    </div>
}