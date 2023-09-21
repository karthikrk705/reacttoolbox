import { configureStore } from "@reduxjs/toolkit";
import togglemodeSlice from "./slice/togglemodeSlice";

const store = configureStore({
    reducer:{
        toggle: togglemodeSlice
    }
})

export default store