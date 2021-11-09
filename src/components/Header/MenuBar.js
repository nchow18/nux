import React, { useState } from 'react';
import MenuModal from './MenuModal';

function MenuBar() {

  const [isModal, setModal] = useState(false);

  return (
    <>
      <div className="menu-bar-container">
        <div onClick={() => {setModal(true)}} className="font-face-raleway font-size-10pt font-bold">MENU </div>
        <img onClick={() => {setModal(true)}} alt="menu" className="icon-small" src={process.env.PUBLIC_URL + '/images/Home/home-icons/menu-drawer-icon.png'} />
        <img alt="cart" className="icon-small"  src={process.env.PUBLIC_URL + '/images/Home/home-icons/add-to-cart-icon.png'} />
      </div>
      {isModal === true && (
        <div className='header-modal'>
          <MenuModal
            setModal={setModal} />
        </div>
      )}
    </>
  )
}

export default MenuBar;