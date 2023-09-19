import { Link } from "react-router-dom";
import loginsty from '../styles/loginpage.module.css';
import { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";

function Loginpage()
{

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const [login, setlogin] = useState(false)

    function validate(event)
    {
    event.preventDefault();
    if(username === "testuser" && password === "WIN@12345") 
    {
        setlogin(true)
    }
    else
    {
        setlogin(false)
    }
    }


    return(
        <div className={loginsty.background}>
            <div className={loginsty.togglebtn}><DarkMode/></div>
            <h1 className={loginsty.logo} >REACT PAGES</h1>
            {/* <Link to='/frontpage'>mainpage</Link>  */}
            <div className={loginsty.loginbox}>
                <form onSubmit={validate}>
                    <div className={loginsty.username}>
                    <label className={loginsty.inputnames}>username:</label><br/>
                    <input type="text" className={loginsty.inputboxs} name="un" onChange={(e) => setusername(e.target.value)}/><br/>
                    </div>
                    <div className={loginsty.password}>
                    <label className={loginsty.inputnames}>password:</label><br/>
                    <input type="password" className={loginsty.inputboxs} name="p" onChange={(e) => setpassword(e.target.value)}/><br/>
                    </div>
                    {login? (<Link to='/frontpage'><input type="submit" value={"Login"} className={loginsty.loginbtn}/></Link>): (<input type="submit" value={"Login"} className={loginsty.loginbtn}/>)}
                </form>
            </div>  
        </div> 
    )
}

export default Loginpage;

