import react from "react";
import style from '../../assets/styles/home.css';


const MobileNav = () => {
    return(
        <div className="mobile--home--nav--buttons">
            <a className='mobile--nav--button'>Download</a>
            <a className='mobile--nav--button'>Nitro</a>
            <a className='mobile--nav--button'>Safety</a>
            <a className='mobile--nav--button'>Support</a>
            <a className='mobile--nav--button'>Blog</a>
            <a className='mobile--nav--button'>Careers</a>
        </div>
    )
}

export default MobileNav;