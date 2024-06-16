import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Comments</h2>
            <ul>
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </ul>
        </div>
    );
}

export default CommentList;
