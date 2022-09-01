
import React, { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import Head from "next/head";
import Script from "next/script";

export default function MainHead({ pageTitle }) {
  useEffect(() => {
    hotjar.initialize(982572, 6);
  }, []);

  return (
    <Head>
      {/* Title */}
      {
        pageTitle ?
        <title>{pageTitle} • Isolant Aislantes</title> :
        <title>Isolant Aislantes</title>
      }
      
      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#14bef0"/>
      <meta name="msapplication-TileColor" content="#14bef0" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap" rel="stylesheet" />

      {/* Scripts */}
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`} />
      <script
        defer async
        dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJS2ZPZ');`}}
      />
    </Head>
  );
}