import {configureStore} from '@reduxjs/toolkit';
import slice from './appLevelSlice.js';
const store = configureStore({
    reducer: {
        slice: slice
    }
});

export default store;