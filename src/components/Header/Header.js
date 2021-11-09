import React from 'react';
import MenuBar from './MenuBar';
import '../../css/header.css';

function Header() {

  return (
    <div className="header-container padding-1rem">
      <div className="display-flex-column-center-all">
        <div>
          nuxe
        </div>
        <div>
          EXTENSION BAR
        </div>
      </div>
      <div className="menu-bar padding-1rem">
        <MenuBar />
      </div>
    </div>
  )
}

export default Header;