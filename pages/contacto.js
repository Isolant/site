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
          <Form
            products={productsData}
            ctaText={formCtaText}
          />
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
