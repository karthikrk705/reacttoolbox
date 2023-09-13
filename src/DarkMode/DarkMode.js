import React, { useState, useReducer } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import context from "../storage";
import { type } from "@testing-library/user-event/dist/type";

function reducer(state, action)
{
    switch (action.type) {
        case 'LIGHT':{
            return{...state, theme:'light'}
        }
        case 'DARK':{
            return{...state, theme:'dark'}
        }
        default:
            break;
    }
}

function DarkMode() {


    const [datatheme, settheme] = useReducer(reducer,{theme:'light'})

    

    return (
        <context.Provider value={{datatheme,settheme}}>
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
        </context.Provider>    
    );
};

export default DarkMode;
