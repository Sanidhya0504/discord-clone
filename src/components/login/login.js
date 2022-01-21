import style from '../../assets/styles/login_styles.css'
import qr_code from '../../assets/qr_code.png'

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
                        <button id="login--btn">Login</button>
                    </form>
                    <p id="login--register">Need an account? <a href="./register">Register</a></p>
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