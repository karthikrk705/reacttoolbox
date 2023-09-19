import React, { useState, useReducer } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { type } from "@testing-library/user-event/dist/type";


function DarkMode() {

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>  
    );
};

export default DarkMode;
