import React from 'react';

import Base from "../../../components/Base";
import Hero from "../../../components/Subproducts/Hero";

import { getCollectionIds, getCollectionById, getAllCollections } from '../../../lib/collections';

export default function Subproduct({ productLinesData, productData, downloadsData }) {
  const { name, description } = productData;
  const { productImage, logo, ecommerceLink, color } = productData.globals;

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
  // const downloadsSection = productData.page.find(product => product.type === 'downloads');
  // const downloadsData = downloadsSection && downloadsSection.downloads !== undefined && downloadsSection.downloads.map(download => getCollectionById("downloads", slugify(download)));
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      productData,
      // downloadsData,
      productLinesData,
    }
  }
}