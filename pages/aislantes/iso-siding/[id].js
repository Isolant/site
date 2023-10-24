import React from 'react';
import slugify from 'react-slugify';

import Base from "../../../components/Base";
import Hero from "../../../components/Subproducts/Hero";
import Details from "../../../components/Subproducts/Details";
import Attributes from "../../../components/Products/Attributes";
import Downloads from "../../../components/Products/Downloads";
import Tutorials from "../../../components/Products/Tutorials";
import RelatedProducts from '../../../components/Products/RelatedProducts';
import FullScreenSection from "../../../components/Layout/FullScreenSection";

import { getCollectionIds, getCollectionById, getAllCollections } from '../../../lib/collections';

import styles from './subproducts.module.css';

export default function Subproduct({ productLinesData, productData, downloadsData, allProductsData }) {
  const { name } = productData;
  const { logo, ecommerceLink, color } = productData.globals;

  const ctaButton = [
    {
      link: ecommerceLink || `/contacto?comprar=${productData.id}`,
      text: `Comprá ${name} Aquí`,
      icon: false,
      color: 'secondary',
      isExternal: true,
    }
  ];

  return (
    <Base
      pageTitle={name}
      productLines={productLinesData}
    >
      {/* Loop through the sections and add the correct component */}
      {productData.page.map((section, index) => {
        let markup = [];
        switch(section.type) {
          case 'hero':
            section.enableHero === true &&
              markup.push (
                <Hero
                  key={index}
                  product={name}
                  logo={logo}
                  image={section.mainImage}
                />
              )
            break;
          case 'details':
            section.enableDetails === true &&
              markup.push (
                <Details
                  key={index}
                  background="/images/products/iso-siding/bg-light.jpg"
                  description={section.detailsText}
                  technicalInformationTitle={section.technicalInformationTitle}
                  technicalInformation={section.technicalInformation}
                  colorsTitle={section.colorsTitle}
                  colors={section.colors}
                  images={section.detailsSlider}
                  product={name}
                />
              )
            break;
          case 'attributes':
            section.enableAttributesSection === true &&
              markup.push (
                <Attributes
                  title={section.attributesTitle}
                  text={section.attributesText}
                  attributes={section.attributes}
                  background="/images/products/iso-siding/bg-light.jpg"
                  key={index}
                  color={color}
                  shouldExpand={true}
                />
              )
            break;
          case 'downloads':
            section.enableDownloadsSection === true &&
              markup.push (
                <Downloads
                  title={section.downloadsTitle}
                  text={section.downloadsText}
                  downloads={downloadsData}
                  background="/images/products/iso-siding/bg-dark.jpg"
                  cardType="secondary"
                  key={index}
                  shouldExpand={false}
                />
              )
            break;
          case 'tutorials':
            section.enableTutorialsSection === true &&
              markup.push (
                <Tutorials
                  title={section.tutorialsTitle}
                  text={section.tutorialsText}
                  tutorials={section.tutorials}
                  key={index}
                  background="/images/products/iso-siding/bg-dark.jpg"
                  color={color}
                />
              )
            break;
          case 'relatedProducts':
            section.enableRelatedProductsSection === true &&
              markup.push (
                <section className="pt-8 md:pt-12">
                  <RelatedProducts
                    title={section.relatedProductsTitle}
                    products={section.relatedProducts.map(selectedProduct => allProductsData.filter(product => selectedProduct === product.name))}
                    textColor={`text-gray-800 ${styles.ConstructionText}`}
                    key={index}
                    background="/images/products/iso-siding/bg-light.jpg"
                  />
                </section>
              )
            break;
          case 'cta':
            section.enableCtaSection === true &&
              markup.push (
                <FullScreenSection
                  image={section.ctaImage}
                  title={section.ctaTitle}
                  titleUsesMarkdown={true}
                  backgroundPosition="center"
                  key={index}
                  theme="dark"
                  height="full"
                  classes="text-center"
                  layout="centered"
                  buttons={ctaButton}
                />
              )
            break;
          default:
            break;
        }

        return markup;
      })}
    </Base>
  )
}

export async function getStaticPaths() {
  const paths = getCollectionIds("subproducts");

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const productData = getCollectionById("subproducts", params.id);
  const downloadsSection = productData.page.find(product => product.type === 'downloads');
  const downloadsData = downloadsSection && downloadsSection.downloads !== undefined && downloadsSection.downloads.map(download => getCollectionById("downloads", slugify(download)));
  const productLinesData = getAllCollections("productLines");
  const allProductsData = getAllCollections("products");

  return {
    props: {
      productData,
      downloadsData,
      productLinesData,
      allProductsData,
    }
  }
}