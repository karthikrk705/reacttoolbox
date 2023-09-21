import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import frontsty from '../styles/frontpg.module.css'
import loginsty from '../styles/loginpage.module.css';
import DarkMode from "../DarkMode/DarkMode";
import { type } from "@testing-library/user-event/dist/type";
import ReactPlayer from 'react-player'
import Videoslider from "./videoslider";


function Frontpage()
{
    const [input,setinput] = useState({phone:"+91"});

    function submit(event)
    {
        event.preventDefault();
        console.log("the details are",input)
    }

    function controller(properties)
    {
        const name = properties.target.name
        const value = properties.target.value
        setinput((prop) => {return{...prop,[name]: value}})
    }
    return(
        <>
        <div className={frontsty.bodydiv}>
            <div className={frontsty.navbar}>
                <h1 className={frontsty.logofp} >REACT PAGES</h1>
                <div className={loginsty.togglebtn}><DarkMode/></div>
            </div>
            {/* <ReactPlayer className={frontsty.testv} url={testvideo} controls={true} /> */}
            <Videoslider parentwidth ={500}/>
            {/* <video className={frontsty.testv} src={video} autoPlay muted={true}/> */}
            <div className={frontsty.container}>
                <div className={frontsty.abou1}><h1>React.js is a popular JavaScript library for building dynamic and interactive user interfaces. Developed and maintained by Facebook, React simplifies the process of creating reusable UI components, making it an ideal choice for building modern web applications. Its virtual DOM (Document Object Model) technology allows for efficient updates and rendering of UI elements, resulting in a faster and smoother user experience</h1></div>
                <div className={frontsty.pic1}></div>
                <div className={frontsty.about2}><h1>Movies are a captivating form of entertainment that combines storytelling, visuals, and sound to transport audiences to different worlds, evoke emotions, and provoke thought. They offer a diverse range of genres and themes, catering to a wide array of tastes and interests. Whether it's the thrill of action films, the heartwarming moments in romantic comedies, or the thought-provoking narratives of documentaries.</h1></div>
                <div className={frontsty.pic2}></div>
                <div className={frontsty.form}>
                    <form onSubmit={submit} className={frontsty.formbox}>
                        <label className={loginsty.inputnames}>Enter your name:   <input type="text" name="name" onChange={controller} className={loginsty.inputboxs}/></label><br/>
                        <label className={loginsty.inputnames}>Enter your age: <input type="number" name="age" onChange={controller} className={loginsty.inputboxs}/></label><br/>
                        <label className={loginsty.inputnames}>Enter your emailId: <input type="email" name="email" onChange={controller} className={loginsty.inputboxs}/></label><br/>
                        <label className={loginsty.inputnames}>Enter your emailId: <input type="text" name="phone" onChange={controller} value={input.phone} className={loginsty.inputboxs}/></label><br/>
                        <label className={loginsty.inputnames}>Select the country: 
                    <select name="Country" onChange={controller} className={loginsty.inputnames}>
                        <option value="" >select</option>
                        <option value="india">India</option>
                        <option value="spain">spain</option>
                        <option value="portugal">portugal</option>
                        <option value="kerala">kerala</option>
                    </select>
                        </label><br/>
                        <label className={loginsty.inputnames}>About: <textarea name="about" onChange={controller} /> </label><br/>
                        <input type="submit" value="submit" className={loginsty.loginbtn}/>
                    </form>
                </div>
            </div>
            {/* <h1>first page {state.theme}</h1> */}
            {/* <Link to='/'>Loginpage</Link> */}
        </div>
        </>
    )
}


{/* <img className={frontsty.imgs} src="https://e0.pxfuel.com/wallpapers/560/14/desktop-wallpaper-movie-collage-80s-movie-collage.jpg"/> */}
export default Frontpage;