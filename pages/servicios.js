// Globals
import React from "react";

// Components
import Base from "../components/Base";
import Hero from "../components/Products/Hero";
import TechnicalAssessorsMap from "../components/Services/TechnicalAssessorsMap";
import Thermography from "../components/Services/Thermography";
import BIM from "../components/Services/BIM";
import Faqs from "../components/Services/Faqs";
import Calculator from "../components/Services/Calculator";

// Library
import { getAllCollections } from '../lib/collections';

// Content
import { attributes } from "../content/services.md";

export default function Services({ productLinesData }) {
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
      footerDecorations={true}
      productLines={productLinesData}
    >
      <Hero
        images={[{
          mainImage: heroImage
        }]}
        slogan={heroTitle}
        benefits={services}
        enableBuyBtn={false}
      />
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
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      productLinesData
    },
  };
}
