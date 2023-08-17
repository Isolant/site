import React, { useState } from 'react';

import Base from '../components/Base';
import Header from '../components/Header';
import FullScreenSection from "../components/Layout/FullScreenSection";
import Filters from "../components/Products/Filters";

import { getAllCollections } from "../lib/collections";

import { verticalPadding } from '../classes/Spacing';

import { attributes } from "../content/products.md";

import styles from "./productos.module.css";

export default function Products({ productLinesData, productsData, categoriesData, subcategoriesData }) {
  let {
    pageTitle,
    productsImage,
    productsTitle
  } = attributes;

  const [ activeProducts, setActiveProducts ] = useState(productsData);

  return (
    <Base
      pageTitle={pageTitle}
      footerTheme="dark"
      footerDecorations={false}
      productLines={productLinesData}
    >
      <Header
        productLines={productLinesData}
      />
      <FullScreenSection
        image={productsImage}
        imagePosition="left"
        title={productsTitle}
        theme="dark"
        layout="centered"
        classes={`${styles.Title} ${verticalPadding}`}
      />
      <section className={`grid md:grid-cols-3 lg:grid-cols-12 gap-4 container mx-auto px-4 ${verticalPadding}`}>
        <Filters
          productLines={productLinesData}
          categories={categoriesData}
          subcategories={subcategoriesData}
          allProducts={productsData}
          setActiveProducts={setActiveProducts}
        />
        {activeProducts.map((product, index) => <p key={index}>{product.name}</p>)}
      </section>
    </Base>
  )
}

export async function getStaticProps() {
  const productLinesData = getAllCollections("productLines");
  const productsData = getAllCollections("products");
  const categoriesData = getAllCollections("categories");
  const subcategoriesData = getAllCollections("subcategories");

  return {
    props: {
      productLinesData,
      productsData,
      categoriesData,
      subcategoriesData,
    },
  };
}
