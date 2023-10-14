import React from 'react'
import BgVideo from './BgVideo.mp4';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <video className='videoTag' autoPlay loop muted>
        <source src={BgVideo} type='video/mp4' />
        </video>
        <header>
        <a><h1 className='color'>Aakash R</h1></a>
        <div className="toggle"></div>
        <nav>
            <ul>
            <li><Link to="/"  className="colorfont">Home</Link></li>
            <li><Link to="/Products" className="nav__link">Products</Link></li>
            <li><Link to="/ContactUs" className="nav__link">ContactUs</Link></li>
            <li><Link to="/AddNewProducts" className="nav__link">Add New Products</Link></li>
            </ul>
        </nav>
        </header>
        <hr/>
    </div>
    
  )
  
}

export default Header;
