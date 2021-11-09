import React from 'react';
import MenuBar from './MenuBar';
import '../../css/header.css';

function Header() {

  return (
    <div className="header-container padding-1rem">
      <div className="desktop-display-flex-row-center-all">
        <img className="desktop-logo-small opacity-0" alt="nuxe-logo" src={process.env.PUBLIC_URL + '/images/Home/Logo-1.png'} />
      </div>
      <div className="menu-bar">
        <MenuBar />
      </div>
    </div>
  )
}

export default Header;