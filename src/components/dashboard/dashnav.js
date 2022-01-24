import react from "react";
import FriendsSVG from "./svg icons/friends_svg";
import style from "../../assets/styles/dashboard_styles.css"

const DashNav =()=>{
    return(
    <>
        <div className="dash--nav--wrap">
            <div id="dash--nav">
                <div id="nav--content">
                    <p id="nav--friends" >< FriendsSVG id="svg--friends"/>Friends</p>
                    <button className="nav--btn">Online</button>
                    <button className="nav--btn">All</button>
                    <button className="nav--btn">Pending</button>
                    <button className="nav--btn">Blocked</button>
                    <button className="nav--btn">Friends</button>
                </div>
            </div>
        </div>
        <hr id="nav--separate"></hr>
    </>
    )
}

export default DashNav;