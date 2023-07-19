import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        storeResults: (state, action) => {
            // state = {...state, ...action.payload}
            Object.assign(state, action.payload)
        }
    }
});

export default searchSlice.reducer;
export const {storeResults} = searchSlice.actions;