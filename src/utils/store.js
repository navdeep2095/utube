import {configureStore} from '@reduxjs/toolkit';
import slice from './appLevelSlice.js';
import searchSlice from './searchSlice.js';
import chatSlice from './chatSlice.js';
const store = configureStore({
    reducer: {
        slice: slice,
        searchSlice: searchSlice,
        chatSlice: chatSlice
    }
});

export default store;