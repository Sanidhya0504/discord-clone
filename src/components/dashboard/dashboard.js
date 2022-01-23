import react from "react";
import ChannelBar from './channelbar';
import DirectMessages from "./direct_messages";

const Dashboard =()=>{
    return(
        <div className="dash--screen">
            <ChannelBar/>
            <DirectMessages/>
        </div>
    )
}

export default Dashboard;