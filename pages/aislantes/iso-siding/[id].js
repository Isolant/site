import React from 'react';
import slugify from 'react-slugify';

import Base from "../../../components/Base";
import Hero from "../../../components/Subproducts/Hero";
import Attributes from "../../../components/Products/Attributes";
import Downloads from "../../../components/Products/Downloads";
import Tutorials from "../../../components/Products/Tutorials";
import FullScreenSection from "../../../components/Layout/FullScreenSection";

import { getCollectionIds, getCollectionById, getAllCollections } from '../../../lib/collections';

export default function Subproduct({ productLinesData, productData, downloadsData }) {
  const { name, description } = productData;
  const { productImage, logo, ecommerceLink, color } = productData.globals;

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
            // Attributes
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
              // Downloads
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
              // Tutorials
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
                // CTA
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

  return {
    props: {
      productData,
      downloadsData,
      productLinesData,
    }
  }
}