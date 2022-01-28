import react from "react";
import ServerNav from "./servernav";
import MsgServer from "./msgserver";
import ServerActive from "./serveractive";


const ServerHome =()=>{
    return(
        <div className="dash--home--screen">
            <ServerNav/> 
                <div id="msg--status--wrap">
                    <MsgServer/>
                    <ServerActive/>
                </div>
                
        </div>
    )
}

export default ServerHome;