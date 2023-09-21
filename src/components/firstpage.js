import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import frontsty from '../styles/frontpg.module.css'
import loginsty from '../styles/loginpage.module.css';
import DarkMode from "../DarkMode/DarkMode";
import { type } from "@testing-library/user-event/dist/type";
import ReactPlayer from 'react-player'

//video imports
import ironmanv from '../assets/Iron Man 3 -- Official Trailer UK Marvel _ HD.mp4'
import avatarv from '../assets/Avatar_ The Way of Water _ Official IMAX® Trailer.mp4'
import johnwickv from '../assets/John Wick_ Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård.mp4'
import oppenhimerv from '../assets/Oppenheimer _ Official Trailer.mp4'
import spiderman from '../assets/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4'



function Frontpage()
{
    const videoarray = [ironmanv,avatarv,johnwickv,oppenhimerv,spiderman]
    const [video, setvideo] = useState(videoarray[1])
    let i = 0

    useEffect(() => {
        setTimeout(() => {
            setvideo(videoarray[2])
        }, 5000); 
    })
    return(
        <>
        <div className={frontsty.bodydiv}>
            <div className={frontsty.navbar}>
                <h1 className={frontsty.logofp} >REACT PAGES</h1>
                <div className={loginsty.togglebtn}><DarkMode/></div>
            </div>
            {/* <ReactPlayer className={frontsty.testv} url={testvideo} controls={true} /> */}
            <video className={frontsty.testv} src={video} autoPlay muted={true}/>
            <div className={frontsty.container}>
                <div className={frontsty.abou1}><h1>HI HELLO</h1></div>
                <div className={frontsty.pic1}></div>
                <div className={frontsty.about2}></div>
                <div className={frontsty.pic2}></div>
                <div className={frontsty.form}></div>
            </div>
            {/* <h1>first page {state.theme}</h1> */}
            {/* <Link to='/'>Loginpage</Link> */}
        </div>
        </>
    )
}


{/* <img className={frontsty.imgs} src="https://e0.pxfuel.com/wallpapers/560/14/desktop-wallpaper-movie-collage-80s-movie-collage.jpg"/> */}
export default Frontpage;