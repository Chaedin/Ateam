import React from 'react';
import teamLogo from '../image/team_logo.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../css/header.css';


const Header = () => {
  
    return (
        <header id="header">
            <div className="main_logo">
                <Link to='/'>
                    <img src={teamLogo} alt="" />
                </Link>
            </div>
            <ul className="nav_menu">
        <li className="nav_menu_item"><Link to="/">HOME</Link></li>
        <li className="nav_menu_item"><Link to="/about">ABOUT</Link></li>
        <li className="nav_menu_item"><Link to="/itemmain">PRODUCT</Link></li>
        <li className="nav_menu_item"><Link to="/mypage">MyPage</Link></li>
        <li className="nav_menu_item"><Link to="/cspage">C/S</Link></li>
      </ul>
      <div className="nav_search">
        <form className="search_form"></form>
        <input className="search_bar" type="text" />
        <button type="submit"></button>
        <button className="search_btn">
          <i className="fa-solid fa-magnifying-glass"><FontAwesomeIcon icon={faSearch} /></i>
        </button>
      </div>

      <button className="navbar__toggle-btn">
        <i className="fa-solid fa-bars"></i>
      </button>
      </header>
    );
}

export default Header;
