import { createSlice } from "@reduxjs/toolkit";


const Togglemode = createSlice({
    name: 'Togglemode',
    initialState: {
        isDark: false
    },
    reducers: {
        TOGGLE_MODE: (state) => {
            state.isDark = !state.isDark
        }
    }
})

export const {TOGGLE_MODE} = Togglemode.actions
export default Togglemode.reducer