import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

const Header = () => {
    let windowWidth = window.innerWidth;
    const [windowDimenion, detectHW] = useState({})

    const detectSize = () => {
      detectHW({
        windowWidth: window.innerWidth
      })
    }
      // console.log(windowWidth, 'windowWidth');
    
      useEffect(() => {
        window.addEventListener('resize', detectSize)
    
        return () => {
            window.removeEventListener('resize', detectSize)
          }
        }, [windowDimenion])

  
  return (
    <header>
      <div className='header-container'>
        <section className='top-border'>
          <i className="fa-solid fa-dragon"></i>
          <span><Link to="/">Discover</Link></span>
        </section>

        <div className='menu-container'>
          <ul className='nav-links'>  
            <li>
              <i className="fa-solid fa-satellite-dish"></i>
              <Link to="/">Trending</Link>
            </li>
            <li>
              <i className="fa-solid fa-tv"></i>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
               <i className="fa-solid fa-fire"></i>
               <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <i className="fa-solid fa-cubes"></i>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
           
      </div>
    </header>
  )
}

export default Header;
