import {configureStore} from '@reduxjs/toolkit';
import slice from './appLevelSlice.js';
import searchSlice from './searchSlice.js';
const store = configureStore({
    reducer: {
        slice: slice,
        searchSlice: searchSlice
    }
});

export default store;