import { Link } from "react-router-dom";
import { useState } from "react";
import testvideo from '../assets/Avatar_ The Way of Water _ Official IMAX® Trailer.mp4'
import frontsty from '../styles/frontpg.module.css'


function Frontpage()
{
    return(
        <div className={frontsty.bodydiv}>
            <nav className={frontsty.navbar}></nav>
            <slider></slider>
            {/* <video className={frontsty.testv} src={testvideo} autoPlay muted/> */}
            <h1>first page</h1>
            <Link to='/'>Loginpage</Link>
        </div>
    )
}

export default Frontpage;