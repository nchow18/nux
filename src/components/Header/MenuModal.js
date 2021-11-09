import React from 'react';

function MenuModal(props) {

  const {
    setModal
  } = props
  
  return (
    <div className="menu-modal ls-25px">
      <div>
        <div className="menu-modal-top">
          <div>
            <div className="menu-border-right">
              LOG IN
            </div>
            <div>
              REGISTER
            </div>
          </div>
          <div onClick={() => {setModal(false)}}>
            <div>CLOSE</div> 
            <img className="close-x" alt="close" src={process.env.PUBLIC_URL + '/images/Home/close.png'} />
          </div>
        </div>
        <div className="menu-modal-content">
          <div className="menu-modal-links-left">
            <div>Home</div>
            <div>Shop</div>
            <div>Shipping</div>
            <div>FAQ</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
          <div className="menu-modal-links-right">
            <div className="menu-modal-legal">
              <div>STORE POLICY</div>
              <div>PRIVACY POLICY</div>
              <div>TERMS AND CONDITIONS</div>
            </div>
            <div className="menu-modal-social">
              <div>IG</div>
              <div>EMAIL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuModal;