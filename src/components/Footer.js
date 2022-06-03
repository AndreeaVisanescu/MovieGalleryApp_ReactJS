import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-menu'>
            <div>
                <i className="fa-solid fa-dragon"></i>
                <div><Link to="/">Discover</Link></div>
            </div>
            <div>
                <i className="fa-solid fa-gear"></i>
                <div>Settings</div>
            </div>
            <div>
                <i className="fa-solid fa-user"></i>
                <div>About Me</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
