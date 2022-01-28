import react from "react";
import ServerNav from "./servernav";


const MsgServer =()=>{
    return(
        <div className="server--msg--screen">
             <div id="msg--box--wrap">
                    <input type="text" id="msg--box" placeholder="Message #general"></input>
                </div>
        </div>
    )
}

export default MsgServer;