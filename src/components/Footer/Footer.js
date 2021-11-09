import React from 'react';
import '../../css/footer.css';
import '../../css/standard.css';

function Footer() {

  return (
    <div className="footer-container padding-1rem display-flex-column-center-all font-size-10px ls-25px">
      {/* <img alt="nuxe" className="logo-small" src={process.env.PUBLIC_URL + '/images/Home/Logo-1.png'} /> */}
      <div className="display-flex-row-center-all footer-bar-menu font-size-l">
        <div className="border-right">ABOUT US</div>
        <div className="border-right">FAQs</div>
        <div className="border-right">MY ACCOUNT</div>
        <div className="border-right">REGISTER</div>
        <div>SHIPPING</div>
      </div>
      <div className="desktop-display-flex-row-top-middle footer-navigation ls-25px font-size-l">
        <div className="desktop-footer-border-right footer-contact desktop-display-flex-column-top-middle">
          <div>CONTACT</div>
          <div>EMAIL ICON</div>
          <div>support@nuxeextensions.com</div>
        </div>
        <div className="desktop-display-flex-column-top-middle footer-navigate desktop-footer-border-right">
          <div>
            <div>NAVIGATE</div>
            <div>Home</div>
            <div>Shop</div>
            <div>Hair Extension Guide</div>
            <div>Aftercare</div>
          </div>
        </div>
        <div className="desktop-display-flex-column-top-middle footer-navigate">
          <div>
            <div>INFORMATION</div>
            <div>Tracking</div>
            <div>Return Policy</div>
            <div>Store Policy</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
      </div>
      <div className="desktop-display-flex-row-top-middle footer-social footer-border-top">
          <div className="footer-connect desktop-footer-border-right">
            <div>LET'S CONNECT</div>
            <div>
              <div>IG</div>
              <div>TIKTOK</div>
              <div>PINTEREST</div>
            </div>
          </div>
          <div className="footer-email">
            <div>
              <div>STAY IN THE KNOW</div>
              <div>Sign up to receive 5% off forever!</div>
              <div className="footer-subscribe">
                <input /><div className="nuxe-button footer-subscribe-button">SUBSCRIBE</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;