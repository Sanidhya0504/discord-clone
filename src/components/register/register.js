import style from '../../assets/styles/register_styles.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return(
        <div id="register--bg">
            <form id="register--card">
                <h3>Create an account</h3>
                <div>
                    <label>EMAIL</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>USERNAME</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input type="password"></input>
                </div>
                <button id="register--btn">Continue</button>
                <div id="register--already">
                    <Link to="/login">Already have an account?</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;