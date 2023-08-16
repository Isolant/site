import React from 'react';

import Base from '../components/Base';
import Header from '../components/Header';
import FullScreenSection from "../components/Layout/FullScreenSection";
import Filters from "../components/Products/Filters";

import { getAllCollections } from "../lib/collections";

import { verticalPadding } from '../classes/Spacing';

import { attributes } from "../content/products.md";

export default function Products({ productLinesData, categoriesData, subcategoriesData }) {
  let {
    pageTitle,
    productsImage,
    productsTitle
  } = attributes;

  return (
    <Base
      pageTitle={pageTitle}
      footerTheme="dark"
      footerDecorations={false}
      productLines={productLinesData}
    >
      <Header />
      <FullScreenSection
        image={productsImage}
        imagePosition="left"
        title={productsTitle}
        theme="dark"
        layout="centered"
        classes={`flex gap-3 ${verticalPadding}`}
      />
      <section className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-4 ${verticalPadding}`}>
        <Filters
          productLines={productLinesData}
          categories={categoriesData}
          subcategories={subcategoriesData}
        />
      </section>
    </Base>
  )
}

export async function getStaticProps() {
  const productLinesData = getAllCollections("productLines");
  const categoriesData = getAllCollections("categories");
  const subcategoriesData = getAllCollections("subcategories");

  return {
    props: {
      productLinesData,
      categoriesData,
      subcategoriesData,
    },
  };
}
