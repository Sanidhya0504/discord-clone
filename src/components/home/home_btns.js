import download_icon from "../../assets/download_icon.png";
import { Link } from "react-router-dom";

const HomeBtns = () => {
    return(
        <div id="home--btns">
            <div className="home-btns-sub-div">
                <button id="download--win">
                    <img src={download_icon}></img>
                    Download for Windows
                </button>
            </div>

            <div className="home-btns-sub-div">
                <Link to="/login" id="open--in">
                    
                        Open Discord in your browser
                    
                </Link>
            </div>
            <div className="home-btns-sub-div play--store">
                <Link to="/" id="open--in">
                    
                        Download from PlayStore
                    
                </Link>
            </div>
        </div>
    )   
}

export default HomeBtns;