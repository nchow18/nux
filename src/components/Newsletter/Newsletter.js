import React from 'react';
import '../../css/newsletter.css';

function Newsletter(props) {

  const {
    setNews
  } = props
  
  return (
    <div onClick={() => {setNews(false)}} className="newsletter-container">
      <img alt="hair-model" src={process.env.PUBLIC_URL + '/images/Home/news-hair-model.png'} />
      <div className="newsletter-info">
        <div>
          <div>Join Our Newsletter</div>
          <div>Sign up to receive 5% forever!</div>
        </div>
        <div>
          <input className="news-input" placeholder="Enter your email address" type="text" />
          <div className="news-subscribe">SUBSCRIBE</div>
        </div>
        <div>
          Be the first to know about exclusive deals to new product launches and everything in between
        </div>
      </div>
    </div>
  )
}

export default Newsletter;