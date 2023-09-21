import React, { useState, useReducer } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_MODE } from "../store/slice/togglemodeSlice";


function DarkMode() {

    const dispatch = useDispatch()
    const toggle = useSelector(state => state.toggle.isDark)
    console.log(toggle)

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={() => dispatch(TOGGLE_MODE())}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>  
    );
};

export default DarkMode;
