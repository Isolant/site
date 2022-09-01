// Globals
import React from "react";

// Components
// import LandingPageHeader from './LandingPage/Header';
import ProfessionalsHeader from './Professionals/Header';

export default function Header({ 
  activeHeader,
  // location,
  productLines,
}) {
  return (
    // Old header for the two paths landing page
    // activeHeader === 'landingPage' ?
    //   <LandingPageHeader /> :
    <ProfessionalsHeader
      // location={location}
      productLines={productLines}
      activeHeader={activeHeader}
    />
  )
}