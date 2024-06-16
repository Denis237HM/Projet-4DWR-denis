import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../store/slices/commentsSlice';
import CommentList from './CommentList';
import Menu from './Menu';
import Profile from './Profile';

function ArticleDetail({ article, onBack }) {
    const comments = useSelector(state => state.comments[article.id]);
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');

    const handleAddComment = () => {
        dispatch(addComment({
            articleId: article.id,
            comment: { id: Date.now(), text: commentText }
        }));
        setCommentText('');
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Menu />
            <div className="flex-grow mt-24 px-5 xl:px-12">
                <button onClick={onBack} className="mb-4 text-blue-500 hover:underline">Back to list</button>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <img src={article.image} alt={article.title} className="w-full h-64 object-cover mb-4" />
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">{article.title}</h1>
                        <Profile />
                    </div>
                    <p className="mb-4">{article.content}</p>
                    <CommentList comments={comments} />
                    <div className="mt-4">
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            className="border p-2 rounded w-full mb-2"
                            placeholder="Add a comment"
                        />
                        <button
                            onClick={handleAddComment}
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetail;
