// Globals
import React, { useEffect, useState } from "react";

// Components
import Base from "../components/Base";
import SmallHero from "../components/SmallHero";
import InsetCallout from "../components/Layout/InsetCallout";
import Form from "../components/Contact/Form";
import ContactInformation from "../components/Contact/ContactInformation";

// Library
import { getAllCollections, getCollectionById } from '../lib/collections';

// Content
import { attributes } from "../content/contact.md";

export default function Contact({ provincesData, localesData, productsData, productLinesData }) {
  let {
    pageTitle,
    heroImageBackground,
    formCtaText,
    contactInformation
  } = attributes;

  useEffect(() => {
    const formScript = document.createElement('script')
    formScript.setAttribute('data-b24-form', 'inline/4/z6c8i0')
    formScript.setAttribute('data-skip-moving', 'true')
    formScript.innerHTML = `(function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b26232869/crm/form/loader_4.js')`;
    
    const position = document.querySelector('.bitrix-form-container');
    position.appendChild(formScript);
  }, [])

  return (
    <Base
      activePage="professionals"
      footerTheme="dark"
      pageTitle={pageTitle}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={true}
      productLines={productLinesData}
    >
      <SmallHero
        image={heroImageBackground}
        title={"Contactate <strong>con nosotros</strong>"}
        theme={'dark'}
      />
      <section className="bg-gray-100">
        <InsetCallout
          decorations={false}
        >
          <div className="bitrix-form-container" />
        </InsetCallout>
        <ContactInformation
          information={contactInformation}
        />
      </section>
    </Base>
  )
}

export async function getStaticProps() {
  const productsData = getAllCollections("products");
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      provincesData,
      localesData,
      productsData,
      productLinesData
    },
  };
}
