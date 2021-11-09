import React, { useState, useEffect } from 'react';
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import Newsletter from '../components/Newsletter/Newsletter';

function Nuxe() {

  const [isNews, setNews] = useState(false)

  useEffect(() => {
    setTimeout(displayNews, 4000);
  },[])

  function displayNews() {
    setNews(true)
  }

  console.log(isNews);

  return (
    <>
      <div className="nuxe-container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
      {isNews === true && (
        <Newsletter 
          setNews={setNews}/>
      )}
    </>
  )
}

export default Nuxe;