import React from 'react';
import slugify from 'react-slugify';

import Base from "../components/Base";
import Hero from "../components/Home/Hero";
import HighlightedProducts from "../components/Home/HighlightedProducts";
import Categories from "../components/Home/Categories";
import ProductLines from "../components/Home/ProductLines";
import TechnicalService from "../components/Home/TechnicalService";
import OtherServices from "../components/Home/OtherServices";
import InstagramSlider from '../components/Home/InstagramSlider';

import { getAllCollections, getCollectionById } from "../lib/collections";

import { attributes } from "../content/homepage.md";

import { fullBleedContainer } from '../classes/Layout';
import { horizontalPadding, verticalPadding } from '../classes/Spacing';

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
    services,
    otherServicesEnabled,
    otherServicesTitle,
    otherServicesSlider,
    contactFormEnabled,
    instagramSlider
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
      {otherServicesEnabled &&
        <OtherServices
          title={otherServicesTitle}
          services={otherServicesSlider}
        />
      }
      {contactFormEnabled &&
        <section
          className={`
            ${fullBleedContainer}
            relative grid lg:grid-cols-2
            bg-white
          `}
        >
          <div
            className="w-full h-96 md:h-screen relative"
          >
            <InstagramSlider
              slider={instagramSlider}
            />
          </div>
          <div
            className={`${horizontalPadding} relative flex flex-col justify-center items-start max-w-2xl`}
          >
            qua
          </div>
        </section>
      }
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
