import react from "react";
import style from "../../assets/styles/dashboard_styles.css";
import logo from "../../assets/discord_logo.svg"
import {Link} from "react-router-dom";

const channelBar =()=>{
    return(
        <div>
            <div className="channel--nav">
                <Link to="/dashboard">
                    <button id="my--channel">
                    <img id="my--channel--img" src={logo}></img>
                    </button>
                </Link>
                <hr id="bar"></hr>
                <Link to="/dashboard/channel">
                    <button id="nav--channel">
                        <img id="nav--channel--img" src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_960_720.png"></img>
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default channelBar;