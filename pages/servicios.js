// Globals
import React from "react";

// Components
import Base from "../components/Base";
import Hero from "../components/Products/Hero";
// import TechnicalAssessors from "../components/Services/TechnicalAssessors";
import TechnicalAssessorsMap from "../components/Services/TechnicalAssessorsMap";
import Thermography from "../components/Services/Thermography";
// import Agenda from "../components/Services/Agenda";
import BIM from "../components/Services/BIM";
import Faqs from "../components/Services/Faqs";
import Calculator from "../components/Services/Calculator";

// Library
import { getAllCollections } from '../lib/collections';

// Content
import { attributes } from "../content/services.md";

export default function Services({ provincesData, localesData, allAgendaItems, provincesResult, productLinesData }) {
  let {
    pageTitle,
    heroImage,
    heroTitle,
    services,
    thermographyImage,
    thermographyTitle,
    thermographyText,
    thermographyCtaText,
    thermographyCtaLink,
    technicalAssessorsTitle,
    technicalAssessorsText,
    agendaTitle,
    agendaText,
    bimImage,
    bimTitle,
    bimText,
    bimCtaLink,
    bimCtaText,
    calculatorImage,
    calculatorTitle,
    calculatorText,
    calculatorCtaLink,
    calculatorCtaText,
    faqsImage,
    faqsTitle,
    faqsText,
    faqsCtaLink,
    faqsCtaText,
    contactCtaLink,
    contactCtaText,
  } = attributes;

  const thermographyBtn = [{
    link: thermographyCtaLink,
    text: thermographyCtaText,
    isExternal: false,
    color: 'secondary'
  }];
  
  const bimBtn = [{
    link: bimCtaLink,
    text: bimCtaText,
    isExternal: false,
    color: 'secondary'
  }];
  
  const calculatorBtn = [{
    link: calculatorCtaLink,
    text: calculatorCtaText,
    isExternal: true,
    icon: true,
    color: 'primary'
  }];
  
  const faqsBtn = [{
    link: faqsCtaLink,
    text: faqsCtaText,
    isExternal: false,
    icon: false,
    color: 'transparent'
  }, {
    link: contactCtaLink,
    text: contactCtaText,
    isExternal: false,
    icon: false,
    color: 'none'
  }];

  return (
    <Base
      activePage="professionals"
      footerTheme="dark"
      pageTitle={pageTitle}
      // provinces={provincesData.provinces}
      // locales={localesData.locales}
      footerDecorations={true}
      productLines={productLinesData}
    >
      <Hero
        background={heroImage}
        slogan={heroTitle}
        benefits={services}
        enableBuyBtn={false}
      />
      {/* Old, removed to avoid using Calipso API */}
      {/* <TechnicalAssessors
        title={technicalAssessorsTitle}
        text={technicalAssessorsText}
        provinces={provincesResult}
      /> */}
      <TechnicalAssessorsMap
        title={technicalAssessorsTitle}
        text={technicalAssessorsText}
      />
      <Thermography
        image={thermographyImage}
        title={thermographyTitle}
        text={thermographyText}
        buttons={thermographyBtn}
      />
      <BIM
        image={bimImage}
        title={bimTitle}
        text={bimText}
        buttons={bimBtn}
      />
      <Calculator
        image={calculatorImage}
        title={calculatorTitle}
        text={calculatorText}
        buttons={calculatorBtn}
      />
      {/* <Agenda
        title={agendaTitle}
        text={agendaText}
        agenda={JSON.parse(allAgendaItems)}
      /> */}
      <Faqs
        image={faqsImage}
        title={faqsTitle}
        text={faqsText}
        buttons={faqsBtn}
      />
    </Base>
  )
}

export async function getStaticProps() {
  // const provincesData = getCollectionById("geolocalization", 'provinces');
  // const localesData = getCollectionById("geolocalization", 'locales');
  // const allAgendaItems = JSON.stringify(getAllCollections("agenda"));
  const productLinesData = getAllCollections("productLines");
  
  // const provinces = await fetch(`https://apps-isolant.somee.com/mobile/api/ws/getProvincias?email=app@isolant`);
  // const provincesResult = await provinces.json();

  return {
    props: {
      // provincesData,
      // localesData,
      // allAgendaItems,
      // provincesResult,
      productLinesData
    },
  };
}
