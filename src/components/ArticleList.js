import React, { useState } from 'react';
import Menu from './Menu';
import Pagination from './Pagination';

function ArticleList({ articles, onArticleClick }) {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const startIndex = (currentPage - 1) * articlesPerPage;
    const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);
    return (
        <div className="flex flex-col min-h-screen">
            <Menu />
            <div className="mt-24 w-full px-5 xl:px-12">
                <h1 className="text-2xl font-bold mb-4">Articles</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {articles.map(article => (
                        <div
                            key={article.id}
                            onClick={() => onArticleClick(article)}
                            className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                                <p className="text-gray-700">{article.content.substring(0, 150)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" />
                    </a>
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default ArticleList;
