import React from 'react';
import '../../css/nuxe.css';
import '../../css/standard.css';

function SectionThree() {

  return (
    <div className="section-three-container display-flex-column-center-all">
      <div className="display-flex-column-center-all">
        <div className="font-size-xxl">Calling all Salon</div>
        <div className="font-size-xxl">Professionals</div>
        <div>
          <div>
            Save up to 35% off entire order and so much more!
          </div>
        </div>
      </div>
      <div className="display-flex-column-center-all">
        <div className="font-size-xl">
          HOW IT WORKS:
        </div>
        <div className="desktop-display-flex-row-top-middle">
          <div>
            <img alt="icons" src={process.env.PUBLIC_URL + '/images/Home/step-one-icon.png'} />
            <img alt="fill-out" src={process.env.PUBLIC_URL + '/images/Home/sign-up-icon.png'} />
            <div>Fill out the application</div>
          </div>
          <div>
          <img alt="icons" src={process.env.PUBLIC_URL + '/images/Home/step-two-icon.png'} />
            <img alt="fill-out" src={process.env.PUBLIC_URL + '/images/Home/log-in-icon.png'} />
            <div>Log into your account</div>
          </div>
          <div>
          <img alt="icons" src={process.env.PUBLIC_URL + '/images/Home/step-three-icon.png'} />
            <img alt="fill-out" src={process.env.PUBLIC_URL + '/images/Home/discount-icon.png'} />
            <div>View all discounted prices and exclusive offers</div>
          </div>
          <div>
          <img alt="icons" src={process.env.PUBLIC_URL + '/images/Home/step-four-icon.png'} />
            <img alt="fill-out" src={process.env.PUBLIC_URL + '/images/Home/fill-out-application-icon.png'} />
            <div>Log in to your account at anytime to check for new promotions and offers!</div>
          </div>
        </div>
      </div>
      <div className="nuxe-button">
        Get started
      </div>
      <div className="display-flex-column-center-all margin-h-4rem">
        <div>Need help choosing?</div>
        <div>Get the perfect extensions with our guide</div>
        <div className="nuxe-button">Hair extension guide</div>
      </div>
    </div>
  )
}

export default SectionThree;