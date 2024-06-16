import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlice';
import commentsReducer from './slices/commentsSlice';

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        comments: commentsReducer,
    },
});

export default store;
