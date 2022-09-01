// Globals
import React from "react";

// Components
import Base from "../components/Base";
import SmallHero from "../components/SmallHero";
import Button from "../components/Forms/Button";
import InsetCallout from "../components/Layout/InsetCallout";

// Library
import { getAllCollections, getCollectionById } from '../lib/collections';

// Content
import { attributes } from "../content/error.md";

// Classes
import { standardTextClasses } from "../classes/Text";
import { verticalPadding } from "../classes/Spacing";

export default function Error({ provincesData, localesData, productLinesData }) {

  let {
    pageTitle,
    heroImageBackground,
    heroTitle,
    heroText,
    heroCtaLink,
    heroCtaText
  } = attributes;

  return (
    <Base
      activePage="professionals"
      pageTitle={pageTitle}
      footerTheme="light"
      provinces={provincesData.provinces}
      locales={localesData.locales}
      productLines={productLinesData}
    >
      <SmallHero
        image={heroImageBackground}
        title={heroTitle}
        theme={'dark'}
        // text={heroText}
        // buttons={heroButton}
      />
      <section className="bg-gray-100">
        <InsetCallout
          decorations={false}
        >
          <div className={`${verticalPadding} text-center`}>
            <p
              className={`${standardTextClasses} text-gray-700 mb-8 max-w-lg mx-auto`}
            >
              {heroText}
            </p>
            <Button
              href={heroCtaLink}
              text={heroCtaText}
              icon={true}
              color={'primary'}
              isExternal={false}
            />
          </div>
        </InsetCallout>
      </section>
    </Base>
  )
}

export async function getStaticProps() {
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      provincesData,
      localesData,
      productLinesData
    },
  };
}
