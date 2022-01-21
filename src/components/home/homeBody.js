import react from "react";
import ImgOne from "../../assets/invite_only_landing.svg";
import ImgTwo from "../../assets/hanging_out_easy_landing.svg";
import ImgThree from "../../assets/fandom_landing.svg";
import ImgFour from "../../assets/just_chilling_landing.svg";
import style from '../../assets/styles/home.css';


const HomeBody = () => {
    return(
        <div>
            <div className="home--card--one">
                <img id="card--img--one" src={ImgOne}></img>
                <div id="card--text--one">
                    <h3 className="card--head">Create an invite-only place where you belong</h3>
                    <p className="card--text">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </div>
            </div>
            <div className="home--card--two">
                <div id="card--text--one">
                    <h3 className="card--head">Where hanging out is easy</h3>
                    <p className="card--text">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                </div>
                <img id="card--img--one" src={ImgTwo}></img>
                
            </div>
            <div className="home--card--one">
                <img id="card--img--one" src={ImgThree}></img>
                <div id="card--text--one">
                    <h3 className="card--head">From few to a fandom</h3>
                    <p className="card--text">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </div>
            </div>
            <div className="home--card--four">
                <div id="card--text--four">
                    <h3 className="card--head">RELIABLE TECH FOR STAYING CLOSE</h3>
                    <p className="card--text">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                </div>
                <img id="card--img--four" src={ImgFour}></img>
                
            </div>
            
        </div>
    )
}

export default HomeBody;