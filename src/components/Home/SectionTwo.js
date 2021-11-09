import React from 'react';

function SectionTwo() {

  return (
    <div className="section-two-container display-flex-column-center-all">
      <div className="font-size-l">
        <div>
          <div>USA-MADE</div> 
          <div>ADHESIVE</div>
        </div>
        <div>
          <div>100%</div> 
          <div>REMY HAIR</div>
        </div>
        <div>
          <div>100%</div> 
          <div>CUTICLE INTACT</div>
        </div>
        <div>
          <div>SUPERIOR HOLD.</div> 
          <div>NO SLIPPAGE</div>
        </div>
      </div>
      <div className="display-flex-column-center-all">
        <div>DISCOVER OUR NEWEST TAPE INS</div>
        <div className="font-size-xl">Soft, Silky and Seamless</div>
        <div>Create a flawless look with our seamless tape-ins that will blend naturally with your hair.</div>
      </div>
      <div className="desktop-display-flex-row-center-all">
        <div>
          <img alt="hair" src={process.env.PUBLIC_URL + '/images/Home/brown-tape-extension.png'} />
          <div></div>
          <div>Individually hand-knitted</div>
        </div>
        <div>
          <img alt="hair" src={process.env.PUBLIC_URL + '/images/Home/brown-curl-extension.png'} />
          <div></div>
          <div>Thick from root to tip</div>          
        </div>
        <div>
          <img alt="hair" src={process.env.PUBLIC_URL + '/images/Home/hair-model.png'} />
          <div></div>
          <div>Blends with natural hair</div> 
        </div>
      </div>
      <div className="nuxe-button">
        Learn More
      </div>
    </div>
  )
}

export default SectionTwo;