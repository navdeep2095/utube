import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        messages: []
    },
    reducers: {
        appendMessage: (state, action) => {
            state.messages.splice(process.env.REACT_APP_OFFSET_LIVE_CHAT, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export default chatSlice.reducer;
export const {appendMessage} = chatSlice.actions;
