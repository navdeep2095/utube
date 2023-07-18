import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "toggleSlice",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export default slice.reducer;
export const {toggleMenu, closeMenu} = slice.actions;