import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center my-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Previous
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 mx-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
