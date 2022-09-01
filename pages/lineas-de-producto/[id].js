// Globals
import React from 'react';
import slugify from 'react-slugify';

// Components
import Base from "../../components/Base";
import Hero from "../../components/Layout/FullScreenSection";
import ProductGrid from "../../components/ProductLines/ProductGrid";

// Styles
import ProductLineStyles from './ProductLines.module.css';

// Library
import { getCollectionIds, getCollectionById, getAllCollections } from '../../lib/collections';

export default function ProductLine({ productLineData, productsData, localesData, provincesData, productLinesData }) {
  
  return (
    <Base
      activePage="professionals"
      pageTitle={productLineData.title}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={true}
      productLines={productLinesData}
    >
      <Hero
        image={productLineData.mainImage}
        title={productLineData.title === "Accesorios" ? `<strong>Accesorios</strong> para tu obra y tu vida` : `Aislantes para <strong>${productLineData.title}</strong>`}
        text={productLineData.description}
        showForm={false}
        theme="dark"
        classes={`pt-16`}
        backgroundPosition="center"
      />
      <ProductGrid
        products={productsData}
        classes={ProductLineStyles.Description}
      />
    </Base>
  )
}


export async function getStaticPaths() {
  const paths = getCollectionIds("productLines");

  return {
    paths,
    fallback: false
  };
}


export async function getStaticProps({ params }) {
  const productLinesData = getAllCollections("productLines");
  const productLineData = getCollectionById("productLines", params.id);
  const productsData = productLineData.products ? productLineData.products.map(product => getCollectionById("products", slugify(product))) : null;
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');

  return {
    props: {
      productLineData,
      productsData,
      provincesData,
      localesData,
      productLinesData
    }
  }
}