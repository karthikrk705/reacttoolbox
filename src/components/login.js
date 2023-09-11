import { Link } from "react-router-dom";
import loginsty from '../styles/loginpage.module.css';

const password = 12345678
const username = "king"

function validate(event)
{
    event.preventDefault();
}

function Loginpage()
{
    return(
        <div className={loginsty.background}>
            <h1 className={loginsty.logo} >TOOL BOX</h1>
            {/* <Link to='/frontpage'>mainpage</Link>  */}
            <div className={loginsty.loginbox}>
                <form onSubmit={validate}>
                    <label>username:</label><br/>
                    <input type="text" className={loginsty.inputboxs}/><br/>
                    <label>password:</label><br/>
                    <input type="password" className={loginsty.inputboxs}/><br/>
                    <input type="submit" value={"Login"} className={loginsty.loginbtn}/><br/>
                </form>
            </div>  
        </div> 
    )
}

export default Loginpage;

