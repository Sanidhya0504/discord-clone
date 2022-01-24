import react from "react"
import FriendsSVG from "./svg icons/friends_svg"
import plus from "../../assets/plus_sign.svg"
import EmptyDm from "./svg icons/emptylist"
import Nitro from "./svg icons/nitro_icon"


const DirectMessages =()=>{
    return(
        <div className="direct--msg--screen">
            <input id="direct--find" type="text" placeholder="Find or start a conversation"></input>
            <hr id="direct--separate"></hr>
            <div id="friends--nitro">
                <button className="direct--button" id="direct--friends">< FriendsSVG id="svg--friends"/>Friends</button>
                <button className="direct--button" id="direct--nitro"><Nitro id="svg--friends"/>Nitro</button>
            </div>
            <p id="direct--plus">DIRECT MESSAGES<img id="plus--sign" src={plus}/></p>
            <EmptyDm/>
        </div>
    )
}

export default DirectMessages;