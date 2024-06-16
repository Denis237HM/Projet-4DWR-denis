import React from 'react';

function Comment({ comment }) {
    return (
        <li className="mb-2 p-2 bg-gray-100 rounded">
            {comment.text}
        </li>
    );
}

export default Comment;
