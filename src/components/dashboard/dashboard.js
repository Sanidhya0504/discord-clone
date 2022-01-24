import react from "react";
import ChannelBar from './channelbar';
import DashHome from "./dashhome";
import DirectMessages from "./direct_messages";

const Dashboard =()=>{
    return(
        <div className="dash--screen">
            <ChannelBar/>
            <DirectMessages/>
            <DashHome/>
        </div>
    )
}

export default Dashboard;