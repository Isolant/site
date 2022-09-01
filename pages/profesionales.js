// Globals
import React from 'react';
import slugify from 'react-slugify';

// Components
import Base from "../components/Base";
import Hero from "../components/Hero";
import ProductLinesSlider from "../components/Professionals/homepage/ProductLinesSlider";
import Solutions from "../components/Professionals/homepage/Solutions";
import HighlightedProducts from "../components/Professionals/homepage/HighlightedProducts";
import Isoplus from "../components/Professionals/homepage/Isoplus";
import TechnicalService from "../components/Professionals/homepage/TechnicalService";

// Library
import { getAllCollections, getCollectionById } from "../lib/collections";

// Content
import { attributes } from "../content/professionals/homepage.md";

export default function ProfessionalsHomepage({ 
  productLinesData,
  solutionsData,
  highlightedProductsData,
  productSelectorTypesData,
  provincesData,
  localesData
}) {
  let {
    pageTitle,
    heroVideoBackground,
    heroVideoImage,
    heroImageMobile,
    heroTitle,
    heroText,
    heroCtaLink,
    heroCtaText,
    productLinesTitle,
    solutionsTitle,
    isoplusTitle,
    isoplusText,
    isoplusCtaLink,
    isoplusImage,
    technicalServiceTitle,
    technicalServiceText,
    services
  } = attributes;

  const heroButton = [{
    link: heroCtaLink,
    text: heroCtaText,
    icon: true,
    color: 'transparent',
    isExternal: false,
  }];

  return (
    <Base
      activePage="professionals"
      pageTitle={pageTitle}
      footerTheme="light"
      provinces={provincesData.provinces}
      locales={localesData.locales}
      productLines={productLinesData}
    >
      <Hero
        videoBackground={heroVideoBackground}
        imageBackground={heroVideoImage}
        imageBackgroundMobile={heroImageMobile}
        title={heroTitle}
        text={heroText}
        buttons={heroButton}
        showForm={true}
        productSelectorTypes={productSelectorTypesData}
        fullHeight={true}
      />
      <HighlightedProducts
        products={highlightedProductsData}
      />
      <section
        className="bg-gray-100"
      >
        <ProductLinesSlider
          title={productLinesTitle}
          productLines={productLinesData}
        />
        <Solutions
          title={solutionsTitle}
          solutions={solutionsData}
        />
      </section>
      <Isoplus
        title={isoplusTitle}
        text={isoplusText}
        link={isoplusCtaLink}
        image={isoplusImage}
      />
      <TechnicalService
        title={technicalServiceTitle}
        text={technicalServiceText}
        services={services}
      />
    </Base>
  )
}

export async function getStaticProps() {
  const productSelectorTypesData = getAllCollections("productSelector/types");
  const productLinesData = getAllCollections("productLines");
  const solutionsData = getAllCollections("solutions");
  const highlightedProductsData = attributes.highlightedProducts.map(product => getCollectionById("products", slugify(product)));
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');

  return {
    props: {
      productLinesData,
      solutionsData,
      highlightedProductsData,
      productSelectorTypesData,
      provincesData,
      localesData,
    },
  };
}
