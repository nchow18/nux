import React from 'react';
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';

function Nuxe() {

  return (
    <div className="nuxe-container padding-1rem">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

export default Nuxe;