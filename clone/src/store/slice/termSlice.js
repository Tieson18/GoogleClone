import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    term: null
};

const termSlice = createSlice({

    initialState,
    name: 'term',
    reducers: {
        setTerm: (state, action) => {
            console.log(action);
            state.term = action.payload
        },
    }
});

export const { setTerm } = termSlice.actions

export default termSlice.reducer;