// Globals
import React, { useState, useEffect } from "react";

// Components
import Base from "../../components/Base";
import SmallHero from "../../components/SmallHero";
import InsetCallout from "../../components/Layout/InsetCallout";
import FullScreenSection from "../../components/Layout/FullScreenSection";
import Sidebar from "../../components/Faqs/Sidebar";
import ActiveFaqs from "../../components/Faqs/Faqs";

// Library
import { getAllCollections, getCollectionById } from '../../lib/collections';

// Content
import { attributes } from "../../content/services/faqs.md";

export default function Faqs({ provincesData, localesData, faqsData, productLinesData }) {
  const [activeCategory, setActiveCategory] = useState("Todas");

  // Initialize variables and state
  const categoriesArray = [];

  // Loop over the existing categories, and store them in a separate array
  faqsData.map(faq => faq.category && categoriesArray.push(faq.category));

  // Get the unique categories from those results
  const uniqueCategories = [...new Set(categoriesArray)];
  const sortedCategories = [];
  uniqueCategories.map(category => {
    if(category === 'Generales') {
      sortedCategories.push({
        name: category,
        order: 1,
      });
    } else if(category === 'Productos') {
      sortedCategories.push({
        name: category,
        order: 2,
      });
    } else if(category === 'Colocación') {
      sortedCategories.push({
        name: category,
        order: 3,
      });
    } else {
      sortedCategories.push({
        name: category,
        order: 4,
      });
    }
  })

  // Logic to get the faqs that have categories that match the active one
  const activeFaqs = faqsData.filter((faq) => {
    if (faq.category === activeCategory) {
      return faq;
    }
  });

  // Function to update the category and push to the url
  const updateCategory = (e) => {
    const category = e.currentTarget.dataset.category;
    setActiveCategory(category);
  };

  let {
    pageTitle,
    heroImageBackground,
    faqsContactImageBackground,
    faqsContactTitle,
    faqsContactText,
    faqsContactCtaText,
    faqsContactCtaLink
  } = attributes;

  const contactButton = [{
    link: faqsContactCtaLink,
    text: faqsContactCtaText,
    isExternal: false,
    color: 'transparent'
  }];

  useEffect(() => {
    // Each time the type is changed, we check to see if the active category exists within the active type
    const categoryExistsWithinType = faqsData
      .map(
        (faq =>
          faq.category &&
          faq.category === activeCategory ||
          faq.category &&
          faq.category.toLowerCase() === activeCategory.toLowerCase()
          )
      )
      .filter((result) => (result === true ? result : ""));

    // If it doesn't exist, we set the default to "Todas"
    if (categoryExistsWithinType.length === 0) setActiveCategory("Todas");

    // Check if the category is valid
    const selectedCategory = uniqueCategories.some(
      (category) => activeCategory === (category)
    );

    // If so, update state with the selected category
    if (selectedCategory === true) {
      setActiveCategory(activeCategory);
    } else {
      // If not, set it to the default "Todas" category
      setActiveCategory("Todas");
    }
  }, [activeCategory]);

  return (
    <Base
      activePage="professionals"
      footerTheme="dark"
      footerDecorations={true}
      pageTitle={pageTitle}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      productLines={productLinesData}
    >
      <SmallHero
        theme="dark"
        title="Preguntas <strong>Frecuentes</strong>"
        image={heroImageBackground}
      />
      <section className="bg-gray-100">
        <InsetCallout
          decorations={true}
        >
          <div
            className={`pt-4 sm:pt-16 md:pt-24 lg:grid lg:grid-cols-6 gap-8`}
          >
            <Sidebar
              categories={sortedCategories}
              activeCategory={activeCategory}
              updateCategory={updateCategory}
            />
            <ActiveFaqs
              categories={sortedCategories}
              activeCategory={activeCategory}
              activeFaqs={
                activeFaqs.length ? activeFaqs : faqsData
              }
            />
          </div>
        </InsetCallout>
        <FullScreenSection
          image={faqsContactImageBackground}
          title={faqsContactTitle}
          text={faqsContactText}
          theme="dark"
          layout="boxed"
          height="full"
          buttons={contactButton}
          classes="top-0 mt-8 md:mt-0 md:-top-24 lg:-top-48 md:-mb-24 lg:-mb-48"
        />
      </section>
    </Base>
  )
}

export async function getStaticProps() {
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const faqsData = getAllCollections("faqs");
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      provincesData,
      localesData,
      faqsData,
      productLinesData
    },
  };
}
