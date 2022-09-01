// Gobals
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

// Components
import Base from '../../components/Base';
import InsetCallout from '../../components/Layout/InsetCallout';
import Hero from '../../components/ProductSelector/Hero';
import HighlightedProduct from '../../components/ProductSelector/HighlightedProduct';
import AlternativeProducts from '../../components/ProductSelector/AlternativeProducts';
import ThankYouModal from '../../components/ProductSelector/ThankYouModal';

// Library
import { getAllCollections, getCollectionById } from '../../lib/collections';

// Content
import { attributes } from "../../content/productSelector/result.md";

export default function ProductSelectorResult({ solutionsData, allProductsData, localesData, provincesData, productLinesData }) {
  let {
    pageTitle,
    productSelectorResultBackground,
    productSelectorResultTitle,
    productSelectorResultCtaText,
    productSelectorHighlightedProductTitle,
    productSelectorAlternativeProductsTitle
  } = attributes;

  const [result, setResult] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('productSelectorOption'));
    
    if(!info) {
      router.push('/');
      return;
    }

    // To get the products associated with this solution
    const selectedSolution = solutionsData.filter(solution => solution.id === info.typology);
    const selectedProducts = selectedSolution[0].products;
    const highlightedProduct = allProductsData.filter(product => product.name === selectedSolution[0].highlightedProduct);
    const selectedProductsData = selectedProducts.map(selectedProduct => allProductsData.filter(product => selectedProduct === product.name && selectedProduct !== selectedSolution[0].highlightedProduct));
    setResult({
      ...info,
      products: selectedProductsData,
      highlightedProduct,
    });
  }, []);

  return (
    <React.Fragment>
      {result &&
        <ThankYouModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          product={result.highlightedProduct[0]}
        />
      }
      <Base
        activePage="professionals"
        pageTitle={pageTitle}
        footerTheme="dark"
        footerDecorations={true}
        provinces={provincesData.provinces}
        locales={localesData.locales}
        productLines={productLinesData}
      >
        <Hero
          background={productSelectorResultBackground}
          title={productSelectorResultTitle}
          cta={productSelectorResultCtaText}
          result={result}
        />
        <section className="bg-gray-100">
          {result &&
            <React.Fragment>
              <InsetCallout
                decorations={false}
                gridClasses={`grid grid-cols-1 md:grid-cols-2 items-center gap-8`}
              >
                <HighlightedProduct
                  title={productSelectorHighlightedProductTitle}
                  product={result.highlightedProduct[0]}
                  modalOpeningFunction={setModalIsOpen}
                />
              </InsetCallout>
              {result.products.length > 0 &&
                <AlternativeProducts
                  title={productSelectorAlternativeProductsTitle}
                  products={result.products}
                />
              }
            </React.Fragment>
          }
        </section>
      </Base>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  // Get all solutions
  const solutionsData = getAllCollections("solutions");
  const allProductsData = getAllCollections("products");
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      solutionsData,
      allProductsData,
      provincesData,
      localesData,
      productLinesData
    },
  };
}
