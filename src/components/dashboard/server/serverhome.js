import react from "react";
import ServerNav from "./servernav";


const ServerHome =()=>{
    return(
        <div className="dash--home--screen">
            <ServerNav/>
            <div id="dash--home">
                <div id="no--friends--wrap">
                    
                </div>
            </div>
        </div>
    )
}

export default ServerHome;