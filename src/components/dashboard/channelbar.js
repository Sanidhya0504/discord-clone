import react from "react";
import style from "../../assets/styles/dashboard_styles.css";
import logo from "../../assets/discord_logo.svg"

const channelBar =()=>{
    return(
        <div>
            <div className="channel--nav">
                <button id="my--channel">
                    <img id="my--channel--img" src={logo}></img>
                </button>
                <hr id="bar"></hr>
                <button id="nav--channel">
                    <img id="nav--channel--img" src={logo}></img>
                </button>
            </div>
            
        </div>
    )
}

export default channelBar;