import React, { useState, useEffect } from 'react';

import Base from '../components/Base';
import Header from '../components/Header';
import FullScreenSection from "../components/Layout/FullScreenSection";
import Filters from "../components/Products/Filters";
import ProductList from "../components/Products/ProductList";
import Pagination from "../components/Products/Pagination";

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

  const [activeProducts, setActiveProducts] = useState(productsData);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = activeProducts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(activeProducts.length / recordsPerPage);

  const shouldPaginationShow = nPages > 1;
  
  useEffect(() => {
    if(shouldPaginationShow === false) {
      setCurrentPage(1);
    }
  }, [shouldPaginationShow]);

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
      <section className={`grid md:grid-cols-3 lg:grid-cols-12 gap-4 items-start container mx-auto px-4 ${verticalPadding}`}>
        <Filters
          productLines={productLinesData}
          categories={categoriesData}
          subcategories={subcategoriesData}
          allProducts={productsData}
          setActiveProducts={setActiveProducts}
        />
        <ProductList
          products={currentRecords}
        />
        {shouldPaginationShow &&
          <Pagination
            nPages={nPages}
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
          />
        }
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
