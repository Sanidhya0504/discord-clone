import style from '../../assets/styles/home.css';
import Flag from '../../assets/usa_flag.png';
import twit from '../../assets/twitter_icon.svg';


const HomeFooter= ()=>{
    return(
        <div id="home--foot">
            <div id="foot--text--box">
                <h3 id="imagine">IMAGINE A PLACE</h3>
                <div id="select--country">
                    <img id="usa--flag" src={Flag}></img>
                    <p id="usa--text">English, USA</p>
                </div>
                
            </div>
            
            <div className='foot--col'>
                <h4 className='foot--col--head'>Product</h4>
                <a className='foot--col--text'>Download</a>
                <a className='foot--col--text'>Nitro</a>
                <a className='foot--col--text'>Status</a>
            </div>
            <div className='foot--col'>
                <h4 className='foot--col--head'>Company</h4>
                <a className='foot--col--text'>About</a>
                <a className='foot--col--text'>Jobs</a>
                <a className='foot--col--text'>Branding</a>
                <a className='foot--col--text'>Newsroom</a>
            </div>
            <div className='foot--col'>
                <h4 className='foot--col--head'>Resources</h4>
                <a className='foot--col--text'>College</a>
                <a className='foot--col--text'>Support</a>
                <a className='foot--col--text'>Safety</a>
                <a className='foot--col--text'>Blog</a>
                <a className='foot--col--text'>Feedback</a>
                <a className='foot--col--text'>Developers</a>
                <a className='foot--col--text'>StreamKit</a>
            </div>
            <div className='foot--col'>
                <h4 className='foot--col--head'>Policies</h4>
                <a className='foot--col--text'>Terms</a>
                <a className='foot--col--text'>Privacy</a>
                <a className='foot--col--text'>Cookie Settings</a>
                <a className='foot--col--text'>Guidelines</a>
                <a className='foot--col--text'>Acknowledgements</a>
                <a className='foot--col--text'>Licenses</a>
                <a className='foot--col--text'>Moderation</a>
            </div>
        </div>

    )
}

export default HomeFooter;