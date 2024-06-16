import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        1: [
            { id: 1, text: "Great article!" },
            { id: 2, text: "Very informative." }
        ],
        2: [
            { id: 1, text: "I learned a lot." },
            { id: 2, text: "Thanks for sharing." }
        ],
        3: [
            { id: 1, text: "Interesting read." },
            { id: 2, text: "Well written." }
        ],
    },
    reducers: {
        addComment: (state, action) => {
            const { articleId, comment } = action.payload;
            if (state[articleId]) {
                state[articleId].push(comment);
            } else {
                state[articleId] = [comment];
            }
        },
    },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
