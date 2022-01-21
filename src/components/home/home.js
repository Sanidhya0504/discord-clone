import react from "react";
import HomeBanner from './banner';
import HomeBody from "./homeBody";
import HomeFooter from "./HomeFooter";

const Home =()=>{
    return(
        <div className="home--screen">
            <HomeBanner/>
            <HomeBody/>
            <HomeFooter/>
        </div>
    )
}

export default Home;