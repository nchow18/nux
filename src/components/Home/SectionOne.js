import React from 'react';
import '../../css/nuxe.css';
import { NavLink } from 'react-router-dom';

function SectionOne() {

  return (
    <div className="padding-1rem section-one-container display-flex-column-center-all">
      <div className="display-flex-column-center-all">
        <div className="font-face-louis">natural</div>
        <div className="font-face-florence">- luxurious -</div>
        <div className="font-face-louis">nuxe.</div>
      </div>
      <NavLink style={{ textDecoration: 'none'}} className="nuxe-button-main" to={`/products/`}>
        Shop our collection
      </NavLink>
    </div>
  )
}

export default SectionOne;