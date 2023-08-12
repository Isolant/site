// Globals
import React from 'react';
import slugify from 'react-slugify';

// Components
import Base from "../components/Base";
import Hero from "../components/Home/Hero";
import HighlightedProducts from "../components/Home/HighlightedProducts";
import Categories from "../components/Home/Categories";
import ProductLines from "../components/Home/ProductLines";
import TechnicalService from "../components/Home/TechnicalService";
import FullScreenSlider from '../components/Layout/FullScreenSlider';
import HalfScreenSection from '../components/Layout/HalfScreenSection';
import FullScreenSection from '../components/Layout/FullScreenSection';

// Library
import { getAllCollections, getCollectionById } from "../lib/collections";

// Content
import { attributes } from "../content/homepage.md";

// SVGs
import {ReactComponent as Dots} from '../public/images/misc/dots.svg';
import {ReactComponent as Circle} from '../public/images/misc/circle.svg';

export default function Homepage({ highlightedProductsData, categoriesData, productLinesData, productSelectorTypesData }) {
  let {
    pageTitle,
    sliderEnabled,
    heroSlider,
    highlightedProductsEnabled,
    categoriesEnabled,
    categoriesTitle,
    productLinesEnabled,
    productLinesTitle,
    productLinesCtaText,
    productLinesCtaLink,
    technicalServiceEnabled,
    technicalServiceTitle,
    technicalServiceText,
    services
  } = attributes;

  return (
    <Base
      pageTitle={pageTitle}
      footerTheme="dark"
      footerDecorations={false}
      productLines={productLinesData}
    >
      {sliderEnabled &&
        <Hero
          slider={heroSlider}
        />
      }
      {highlightedProductsEnabled &&
        <HighlightedProducts
          products={highlightedProductsData}
        />
      }
      {categoriesEnabled &&
        <Categories
          title={categoriesTitle}
          categories={categoriesData}
        />
      }
      {productLinesEnabled &&
        <ProductLines
          title={productLinesTitle}
          productLines={productLinesData}
          ctaText={productLinesCtaText}
          ctaLink={productLinesCtaLink}
        />
      }
      {technicalServiceEnabled &&
        <TechnicalService
          title={technicalServiceTitle}
          text={technicalServiceText}
          services={services}
        />
      }
      {/* <HalfScreenSection
        image={calculatorImage}
        imagePosition={"left"}
        title={calculatorTitle}
        text={calculatorText}
        buttons={calculatorButtons}
        theme="light"
        height="full"
      >
        <Dots
          className="text-gray-500 fill-current transform -rotate-180 absolute top-4 left-4 hidden lg:block"
        />
        <Dots
          className="text-gray-500 fill-current absolute bottom-4 right-4 hidden lg:block"
        />
      </HalfScreenSection>
      <HalfScreenSection
        image={isoplusImage}
        title={isoplusTitle}
        text={isoplusText}
        buttons={isoplusButton}
        imagePosition={"right"}
        theme="light"
        height="full"
      >
        <Dots
          className="text-gray-500 fill-current transform -rotate-180 absolute top-4 left-4 hidden lg:block"
        />
        <Dots
          className="text-gray-500 fill-current absolute bottom-4 right-4 hidden lg:block"
        />
      </HalfScreenSection>
      <HalfScreenSection
        image={entrepreneoursImage}
        imagePosition={"left"}
        title={entrepreneoursTitle}
        text={entrepreneoursText}
        buttons={entrepreneoursButton}
        theme="light"
        height="full"
      >
        <Dots
          className="text-gray-500 fill-current transform -rotate-180 absolute top-4 left-4 hidden lg:block"
        />
        <Dots
          className="text-gray-500 fill-current absolute bottom-4 right-4 hidden lg:block"
        />
      </HalfScreenSection>
      <FullScreenSection
        image={professionalHomepageImage}
        imagePosition={"right"}
        title={professionalHomepageTitle}
        text={professionalHomepageText}
        buttons={professionalHomepageButton}
        theme="dark"
        height="full"
        layout="boxed"
      >
        <Dots className="hidden lg:block absolute left-4 xl:left-16 bottom-4 xl:-bottom-8 text-gray-100 fill-current z-10 transform rotate-90" />
        <Circle className="hidden lg:block absolute right-4 xl:right-16 -bottom-8 text-red-200 fill-current z-10" />
      </FullScreenSection> */}
    </Base>
  )
}

export async function getStaticProps() {
  const productSelectorTypesData = getAllCollections("productSelector/types");
  const productLinesData = getAllCollections("productLines");
  const categoriesData = getAllCollections("categories");
  const highlightedProductsData = attributes.highlightedProducts.map(product => getCollectionById("products", slugify(product)));

  return {
    props: {
      productLinesData,
      highlightedProductsData,
      categoriesData,
      productSelectorTypesData,
    },
  };
}
