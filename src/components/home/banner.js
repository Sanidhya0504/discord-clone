import react from "react";
import style from '../../assets/styles/home.css';
import ImgLeft from '../../assets/left_bg_landing_header.svg';
import ImgRight from '../../assets/right_bg_landing_header.svg';
import Nav from './navbar';

const HomeBanner=()=>{
    return(
        <div>
            <div className="home--banner">
                <Nav/>
                <div id="home--text--wrapper">
                    <div id="home--body">
                        <h2 id="home--body--heading">IMAGINE A PLACE...</h2>
                        <p className="home--body--span">...where you can belong to a school club, a gaming group or a worldwide art community.</p>
                        <p className="home--body--span">Where just you and a handful of friends can spend time together. A place that makes it easy to talk everyday and hang out more often.</p>
                    </div>
                </div>
                <div className="left--right--banner">
                    <img id="home--img--left" src={ImgLeft}></img>
                    <img id="home--img--right" src={ImgRight}></img>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;