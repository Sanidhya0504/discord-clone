import react from "react";
import discord_logo from '../../assets/discord_logo.svg';
import style from '../../assets/styles/home.css';
import { Link } from "react-router-dom";
import {FiMenu} from "react-icons/fi";
import DeskNav from "./desknav";
import MobileNav from "./mobilenav";
import { useState } from "react";

const Nav = () => {

    const [open, setOpen] = useState(false);

    return(
        <nav>
            <div className="nav--wrap">
                <div className="home--logo">
                
                    <img id="home--logo--img" src={discord_logo}></img>
                    <span id="logo--text">Discord</span>
                </div>
                <DeskNav/>
                <div>
                    <button className='nav--login--button'>
                        <Link to='/login'>Login</Link>
                    </button>
                    <FiMenu className="nav--burger" onClick={()=> setOpen(!open)}/>
                </div>
            </div>
            {open && <MobileNav/>}
        </nav>
    )
}

export default Nav;