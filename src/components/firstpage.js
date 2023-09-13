import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import testvideo from '../assets/Avatar_ The Way of Water _ Official IMAX® Trailer.mp4'
import frontsty from '../styles/frontpg.module.css'
import loginsty from '../styles/loginpage.module.css';
import DarkMode from "../DarkMode/DarkMode";
import context from "../storage";
import { type } from "@testing-library/user-event/dist/type";

const [state, setter] = useContext(context)
console.log(state.theme)


function Frontpage()
{


    return(
        <>
        <div className={frontsty.bodydiv}>
            <div className={loginsty.togglebtn}>
                <DarkMode/>
            </div>
            <h1>the dark mode state is:</h1>
            <nav className={frontsty.navbar}></nav>
            <video className={frontsty.testv} src={testvideo} autoPlay muted/> 
            {/* <h1>first page {state.theme}</h1> */}
            <Link to='/'>Loginpage</Link>
        </div>
        </>
    )
}

export default Frontpage;