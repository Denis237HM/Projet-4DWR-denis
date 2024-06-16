import { createSlice } from '@reduxjs/toolkit';

const generateArticles = () => {
    const articles = [];
    for (let i = 1; i <= 60; i++) {
        articles.push({
            id: i,
            title: `Article ${i}`,
            content: `Content of article ${i}`,
            image: `https://picsum.photos/id/${i}/200/300`,
        });
    }
    return articles;
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState: generateArticles(),
    reducers: {
        addArticle: (state, action) => {
            state.push(action.payload);
        },
        updateArticle: (state, action) => {
            const index = state.findIndex(article => article.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteArticle: (state, action) => {
            return state.filter(article => article.id !== action.payload);
        },
    },
});

export const { addArticle, updateArticle, deleteArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
