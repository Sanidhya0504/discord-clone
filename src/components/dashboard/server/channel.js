import react from "react"


const Channel =()=>{
    return(
        <div className="direct--msg--screen">
            <h3 id="channel--head">Channel</h3>
            <hr id="direct--separate"></hr>
            <p className="channel--text">TEXT CHANNELS</p>
            <button className="channel--button"><h3>#</h3>general</button>
            <p className="channel--text">VOICE CHANNELS</p>
            <button className="channel--button"><h3>#</h3>general</button>
        </div>
    )
}

export default Channel;