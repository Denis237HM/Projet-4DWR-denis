import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../store/slices/articlesSlice';

function ArticleForm({ onBack }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArticle = {
            id: Date.now(),
            title,
            content,
            image: image || `https://picsum.photos/200/300?random=${Date.now()}`,
        };
        dispatch(addArticle(newArticle));
        onBack(); // Navigate back to the article list
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Article</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-2 rounded w-full"
                        rows="5"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onBack}
                        className="bg-gray-500 text-white p-2 rounded"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Create Article
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ArticleForm;
