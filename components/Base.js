// Globals
import React from "react";

// Components
import MainHead from "./MainHead";
import Header from "./Header";
import Footer from "./Footer";

export default function Base({
  pageTitle,
  footerTheme,
  footerDecorations,
  children,
  productLines,
}) {
  return (
    <>
      <MainHead
        pageTitle={pageTitle}
      />
      <Header
        productLines={productLines}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TJS2ZPZ"
          height="0"
          width="0"
          style={{ visibility: 'hidden', display: 'none'}}
        />
      </noscript>
      <main>{children}</main>
      <Footer
        footerTheme={footerTheme}
        footerDecorations={footerDecorations}
      />
    </>
  );
}
