import react from "react";
import ChannelBar from '../channelbar';
import Channel from "./channel";
import ServerHome from "./serverhome";



const Server =()=>{
    return(
        <div className="dash--screen">
            <ChannelBar/>
            <Channel/>
            <ServerHome/>
        </div>
    )
}

export default Server;