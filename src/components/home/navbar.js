import react from "react";
import discord_logo from '../../assets/discord_logo.svg';
import style from '../../assets/styles/home.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <div className="nav--wrap">
                <div className="home--logo">
                
                    <img id="home--logo--img" src={discord_logo}></img>
                    <span id="logo--text">Discord</span>
                </div>
                <div className="home--nav--buttons">
                    <a className='nav--button'>Download</a>
                    <a className='nav--button'>Nitro</a>
                    <a className='nav--button'>Safety</a>
                    <a className='nav--button'>Support</a>
                    <a className='nav--button'>Blog</a>
                    <a className='nav--button'>Careers</a>
                </div>
                <div>
                    <button className='nav--login--button'>
                        <Link to='/login'>Login</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;