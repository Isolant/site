// Globals
import React, { useEffect, useState } from 'react';
import slugify from 'react-slugify';

// Components
import Base from "../../components/Base";
import Hero from "../../components/Layout/FullScreenSection";
import ProductGrid from "../../components/ProductLines/ProductGrid";

// Styles
import ProductLineStyles from '../lineas-de-producto/ProductLines.module.css';

// Library
import { getCollectionIds, getCollectionById, getAllCollections } from '../../lib/collections';

export default function Solution({ solutionData, productsData, localesData, provincesData, productLinesData }) {
  return (
    <Base
      activePage="professionals"
      pageTitle={solutionData.title}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={true}
      productLines={productLinesData}
    >
      <Hero
        image={solutionData.mainImage}
        title={`Aislantes para <strong>${solutionData.title}</strong>`}
        text={solutionData.description}
        showForm={false}
        theme="dark"
        classes={`pt-16`}
      />
      <ProductGrid
        products={productsData}
        classes={ProductLineStyles.Description}
      />
    </Base>
  )
}


export async function getStaticPaths() {
  const paths = getCollectionIds("solutions");

  return {
    paths,
    fallback: false
  };
}


export async function getStaticProps({ params }) {
  const solutionData = getCollectionById("solutions",params.id);
  const productLinesData = getAllCollections("productLines");
  const productsData = solutionData.products ? solutionData.products.map(product => getCollectionById("products", slugify(product))) : null;
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');

  return {
    props: {
      solutionData,
      productsData,
      provincesData,
      localesData,
      productLinesData
    }
  }
}