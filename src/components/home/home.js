import react from "react";
import HomeBanner from './banner';
import HomeBody from "./homeBody";

const Home =()=>{
    return(
        <div className="home--screen">
            <HomeBanner/>
            <HomeBody/>
        </div>
    )
}

export default Home;