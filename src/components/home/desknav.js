import react from "react";
import style from '../../assets/styles/home.css';


const DeskNav = () => {
    return(
        <div className="home--nav--buttons">
            <a className='nav--button'>Download</a>
            <a className='nav--button'>Nitro</a>
            <a className='nav--button'>Safety</a>
            <a className='nav--button'>Support</a>
            <a className='nav--button'>Blog</a>
            <a className='nav--button'>Careers</a>
        </div>
    )
}

export default DeskNav;