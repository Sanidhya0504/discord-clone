import react from "react";

const DirectMessages =()=>{
    return(
        <div className="direct--msg--screen">
            <input id="direct--find" type="text" placeholder="Find or start a conversation"></input>
            <hr></hr>
            <div id="friends--nitro">
                <button class="direct--button" id="direct--friends">Friends</button>
                <button class="direct--button" id="direct--nitro">Nitro</button>
            </div>
        </div>
    )
}

export default DirectMessages;