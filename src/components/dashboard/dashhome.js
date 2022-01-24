import react from "react";
import DashNav from "./dashnav";
import NoFriends from "../../assets/no_online-friends.svg";


const DashHome =()=>{
    return(
        <div className="dash--home--screen">
            <DashNav/>
            <div id="dash--home">
                <div id="no--friends--wrap">
                    <img id="no--friends--img" src={NoFriends}></img>
                </div>
                <div id="active--now">
                    <h3 id="active--text">Active Now</h3>
                    <p id="its--quiet">It's quiet for now...</p>
                    <p id="when--a--friend">When a friend starts an activity-like playing a game or hanging out on voice- we'll show it here.</p>
                </div>
            </div>
        </div>
    )
}

export default DashHome;