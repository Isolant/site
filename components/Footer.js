// Globals
import React from "react";

// Components
// import LandingPageFooter from './LandingPage/Footer';
import InternalFooter from './InternalFooter';

export default function Footer({ activeFooter, footerTheme, footerDecorations}) {
  return (
    // Old footer for the two paths landing page
    // activeFooter === 'landingPage' ?
    //   <LandingPageFooter
    //     theme={footerTheme}
    //     decorations={footerDecorations}
    //   /> :
    <InternalFooter
      theme={footerTheme}
      decorations={footerDecorations}
    />
  )
}