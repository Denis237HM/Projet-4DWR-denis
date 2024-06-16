import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import ArticleDetail from './components/ArticleDetail';
import ArticleList from './components/ArticleList';
import Categorie from './components/Categorie';
import DetailsProfil from './components/DetailsProfile';
import Menu from './components/Menu';
import ArticleForm from './components/ArticleForm';

import './index.css';

function App() {
    const articles = useSelector(state => state.articles);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleBackToList = () => {
        setSelectedArticle(null);
    };

    return (
        <div className="container mx-auto p-4">
            <Menu />
            <Routes>
                <Route
                    path="/"
                    element={
                        selectedArticle ? (
                            <ArticleDetail
                                article={selectedArticle}
                                onBack={handleBackToList}
                            />
                        ) : (
                            <ArticleList articles={articles} onArticleClick={handleArticleClick} />
                        )
                    }
                />
                <Route path="/categorie" element={<Categorie />} />
                <Route path="/user-profile" element={<DetailsProfil />} />
                <Route path="/edit-article" element={<ArticleForm />} />
            </Routes>
        </div>
    );
}

export default App;
