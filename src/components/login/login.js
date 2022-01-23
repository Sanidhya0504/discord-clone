import style from '../../assets/styles/login_styles.css'
import qr_code from '../../assets/qr_code.png'
import { Link } from 'react-router-dom'

const Login=()=>{
    return(
        <div className='login--page'>
            <div className='login--card'>
                <div id="login--card--form">
                    <h3>Welcome back!</h3>
                    <p>We are so excited to see you again!</p>
                    <form id="login--form">
                        <label>EMAIL</label>
                        <input type="text"></input>
                        <label>PASSWORD</label>
                        <input type="password"></input>
                        <a>Forgot your password?</a>
                        <Link to="/dashboard">
                            <button id="login--btn">Login</button>
                        </Link>
                    </form>
                    <p id="login--register">Need an account? <Link to="/register">Register</Link></p>
                </div>
                <div id="login--card--qr">
                    <div id="login--QR-code">
                        <img src={qr_code} />
                    </div>
                    <h3>Login with QR code</h3>
                    <p>Scan this with <b>Discord mobile app</b> to log in instantly.</p>
                </div>
            </div>
        </div>

    )
}
export default Login;