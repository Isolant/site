import React from 'react';
import slugify from 'react-slugify';

import Base from "../../../components/Base";
import Hero from "../../../components/Subproducts/Hero";
import Details from "../../../components/Subproducts/Details";
import Attributes from "../../../components/Products/Attributes";
import Installation from "../../../components/Subproducts/Installation";
import Calculation from "../../../components/Subproducts/Calculation";
import Profiles from "../../../components/Subproducts/Profiles";
import Typologies from "../../../components/Subproducts/Typologies";
import Maintenance from "../../../components/Subproducts/Maintenance";
import Downloads from "../../../components/Products/Downloads";
import Tutorials from "../../../components/Products/Tutorials";
import RelatedProducts from '../../../components/Products/RelatedProducts';
import FullScreenSection from "../../../components/Layout/FullScreenSection";

import { getCollectionIds, getCollectionById, getAllCollections } from '../../../lib/collections';

import styles from './subproducts.module.css';

export default function Subproduct({ productLinesData, productData, downloadsData, allProductsData, instructionsData }) {
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
          case 'instructions':
            section.enableInstructionsSection === true &&
              markup.push (
                <Installation
                  title={`Instalación Siding **${name}**`}
                  instructions={instructionsData[0]}
                  key={index}
                />
              )
            break;
          case 'calculation':
            section.enableCalculationSection === true &&
              markup.push (
                <Calculation
                  key={index}
                  title={section.calculationTitle}
                  text={section.calculationText}
                  image={section.calculationImage}
                  background="/images/products/iso-siding/bg-light.jpg"
                  steps={section.calculationList}
                  color={color}
                />
              )
            break;
          case 'profiles':
            section.enableProfilesSection === true &&
              markup.push (
                <Profiles
                  key={index}
                  title={section.profilesTitle}
                  image={section.profilesImage}
                  profiles={section.profilesList}
                />
              )
            break;
          case 'typologies':
            section.enableTypologiesSection === true &&
              markup.push (
                <Typologies
                  key={index}
                  background="/images/products/iso-siding/bg-light.jpg"
                  typologies={section.typologiesList}
                />
              )
            break;
          case 'maintenance':
            section.enableMaintenanceSection === true &&
              markup.push (
                <Maintenance
                  key={index}
                  background="/images/products/iso-siding/bg-light.jpg"
                  title={section.maintenanceTitle}
                  text={section.maintenanceText}
                  image={section.maintenanceImage}
                  linkText={section.maintenanceCTAText}
                  linkCTA={section.maintenanceCTALink}
                  steps={section.cleaningSteps}
                  color={color}
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
  const instructionsSection = productData.page.find(product => product.type === 'instructions');
  const instructionsData = instructionsSection && instructionsSection.instructions !== undefined ? instructionsSection.instructions.map(product => getCollectionById("instructions", slugify(product))): null;
  const downloadsSection = productData.page.find(product => product.type === 'downloads');
  const downloadsData = downloadsSection && downloadsSection.downloads !== undefined && downloadsSection.downloads.map(download => getCollectionById("downloads", slugify(download)));
  const productLinesData = getAllCollections("productLines");
  const allProductsData = getAllCollections("products");

  return {
    props: {
      productData,
      downloadsData,
      instructionsData,
      productLinesData,
      allProductsData,
    }
  }
}