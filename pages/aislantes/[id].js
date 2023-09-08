// Globals
import React from 'react';
import slugify from 'react-slugify';

// Components
import Base from "../../components/Base";
import Hero from "../../components/Products/Hero";
import CustomHero from "../../components/Products/CustomHero";
import DetailCards from "../../components/Products/DetailCards";
import Details from "../../components/Products/Details";
import Attributes from "../../components/Products/Attributes";
import Map from "../../components/Products/Map";
import Benefits from "../../components/Products/Benefits";
import Video from "../../components/Products/Video";
import Instructions from "../../components/Products/Instructions";
import TechnicalInformation from "../../components/Products/TechnicalInformation";
import Downloads from "../../components/Products/Downloads";
import Tutorials from "../../components/Products/Tutorials";
import Contact from "../../components/Products/Contact";
import FullScreenSection from "../../components/Layout/FullScreenSection";

// Library
import { getCollectionIds, getCollectionById, getAllCollections } from '../../lib/collections';

// SVGs
import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';
import { ReactComponent as Circle } from '../../public/images/misc/circle.svg';

export default function Product({ productData, instructionsData, localesData, provincesData, downloadsData, productLinesData, productsData }) {
  // Data massaging
  const { name, description } = productData;
  const { productImage, logo, ecommerceLink } = productData.globals;
  const sections = Object.entries(productData.page[0]).map(( [k, v] ) => ({ [k]: v }));
  
  const ctaButtons = [
    {
      link: ecommerceLink ? ecommerceLink : `/contacto?comprar=${productData.id}`,
      text: `Comprá ${name} Aquí`,
      icon: false,
      color: 'secondary',
      isExternal: true,
    }, {
      link: `/contacto`,
      text: 'Contactate con nosotros',
      icon: false,
      color: 'transparent',
      isExternal: false,
    }, {
      link: `/servicios/preguntas-frecuentes`,
      text: 'Preguntas Frecuentes',
      icon: false,
      color: 'none',
      isExternal: false,
    },
  ];

  return (
    <Base
      activePage="professionals"
      pageTitle={name}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={false}
      productLines={productLinesData}
    >
      {/* Loop through the sections and add the correct component */}
      {sections.map((section, index) => {
        let markup = [];
        switch(Object.keys(section)[0]) {
          // Select which hero we have to render
          case 'hero':
            section.hero.enableHero && section.hero.heroType === 'custom' ? 
              markup.push (
                <CustomHero
                  background={section.hero.heroImage.mainImage}
                  backgroundPosition={section.hero.heroImage.mainImageBackgroundPosition}
                  product={name}
                  eyebrow={section.hero.eyebrow}
                  slogan={section.hero.slogan}
                  description={description}
                  logo={logo}
                  key={index}
                />
              )
            :
              markup.push (
                <Hero
                  background={section.hero.heroImage.mainImage}
                  backgroundVideo={section.hero.mainVideo}
                  backgroundPosition={section.hero.mainImageBackgroundPosition}
                  product={name}
                  slogan={section.hero.slogan}
                  benefits={section.hero.mainBenefits}
                  enableDetailsSection={section.details && section.details.enableDetailsSection === true ? true : false}
                  key={index}
                />
              )
            break;
          // Details
          case 'details':
            section.details && section.details.enableDetailsSection === true &&
              markup.push (
                <Details
                  image={section.details.detailsImage}
                  title={name}
                  text={description}
                  logo={logo}
                  link={ecommerceLink ? ecommerceLink : `/contacto?comprar=${productData.id}`}
                  functions={section.details.function}
                  applications={section.details.application}
                  presentations={section.details.presentation}
                  anchor="details"
                />
              )
            break;
          // Detail cards
          case 'detailCards':
            section.detailCards && section.detailCards.enableDetailCardsSection === true &&
              markup.push (
                <DetailCards
                  cards={section.detailCards.cards}
                />
              )
            break;
          // Benefits
          case 'benefits':
            section.benefits && section.benefits.enableBenefitsSection === true &&
              markup.push (
                <Benefits
                  image={section.benefits.benefitsImage}
                  patent={section.benefits.patentImage}
                  subtitle={section.benefits.benefitsSubtitle}
                  title={section.benefits.benefitsTitle}
                  text={section.benefits.benefitsText}
                  logo={logo}
                  link={ecommerceLink ? ecommerceLink : `/contacto?comprar=${productData.id}`}
                  benefits={section.benefits.benefitsList}
                />
              )
            break;
          // Attributes
          case 'attributes':
            section.attributes && section.attributes.enableAttributesSection === true &&
              markup.push (
                <Attributes
                  title={section.attributes.attributesTitle}
                  text={section.attributes.attributesText}
                  attributes={section.attributes.attributes}
                />
              )
            break;
          // Video
          case 'video':
            section.video && section.video.enableVideoSection === true &&
              markup.push (
                <Video
                  video={section.video.video}
                />
              )
            break;
          // Subproducts
          case 'subproducts':
            section.subproducts && section.subproducts.enableSubproductsSection === true &&
              markup.push (
                <p>TBD: Subproducts</p>
              )
            break;
          // Map
          case 'map':
            section.map && section.map.enableMapSection === true &&
              markup.push (
                <Map>{section.map.mapEmbed.code}</Map>
              )
            break;
          // Instructions
          case 'instructions':
            section.instructions && section.instructions.enableInstructions === true &&
              markup.push (
                <Instructions
                  product={name}
                  instructions={instructionsData}
                  pdf={productData.pdfInstruction && productData.pdfInstruction}
                />
              )
            break;
          // Technical Information
          case 'technicalInformation':
            section.technicalInformation && section.technicalInformation.enableTechnicalInformation === true &&
              markup.push (
                <TechnicalInformation
                  product={name}
                  productImage={productImage}
                  technicalInformation={section.technicalInformation.technicalInformationList}
                  generalInformation={section.technicalInformation.generalInformationList}
                />
              )
            break;
          // Downloads
          case 'downloads':
            section.downloads && section.downloads.enableDownloadsSection === true &&
              markup.push (
                <Downloads
                  title={section.downloads.downloadsTitle}
                  text={section.downloads.downloadsText}
                  downloads={downloadsData}
                />
              )
            break;
          // Tutorials
          case 'tutorials':
            section.tutorials && section.tutorials.enableTutorialsSection === true &&
              markup.push (
                <Tutorials
                  title={section.tutorials.tutorialsTitle}
                  text={section.tutorials.tutorialsText}
                  tutorials={section.tutorials.tutorials}
                />
              )
            break;
          // Colocation
          case 'colocation':
            section.colocation && section.colocation.enableColocationSection === true &&
              markup.push (
                <FullScreenSection
                  image={section.colocation.colocationImage}
                  title={section.colocation.colocationTitle}
                  theme="dark"
                  height="full"
                  buttons={[{
                    link: productData.page[0].colocation.colocationCtaLink,
                    text: productData.page[0].colocation.colocationCtaText,
                    icon: false,
                    color: 'white',
                    isExternal: true,
                  }, {
                    link: productData.page[0].colocation.technicalAssessorCtaLink,
                    text: productData.page[0].colocation.technicalAssessorCtaText,
                    icon: false,
                    color: 'transparent',
                    isExternal: false,
                  }]}
                />
              )
            break;
          // CTA
          case 'cta':
            section.cta && section.cta.enableCtaSection === true &&
              markup.push (
                <FullScreenSection
                  image={section.cta.ctaImage}
                  title={section.cta.ctaTitle ? section.cta.ctaTitle : section.cta.slogan}
                  backgroundPosition={section.cta.ctaImageBackgroundPosition}
                  theme="dark"
                  height="full"
                  classes="text-center"
                  layout="centered"
                  buttons={ctaButtons}
                >
                  <Dots className="hidden lg:block absolute left-4 xl:left-16 bottom-4 xl:-bottom-8 text-gray-100 fill-current z-10 transform rotate-90" />
                  <Circle className="hidden lg:block absolute right-4 xl:right-16 -bottom-8 text-red-200 fill-current z-10" />
                </FullScreenSection>
              )
            break;
          // Contact
          case 'contact':
            section.contact && section.contact.enableContactSection === true &&
              markup.push (
                <Contact
                  image={section.contact.contactFormImage}
                  title={section.contact.contactFormTitle}
                  text={section.contact.contactFormText}
                  products={productsData}
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
  const paths = getCollectionIds("products");

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const productData = getCollectionById("products", params.id);
  const instructionsData = productData.page[0].instructions && productData.page[0].instructions.instructions ? productData.page[0].instructions.instructions.map(product => getCollectionById("instructions", slugify(product))) : null;
  const downloadsData = productData.page[0].downloads.downloads ? productData.page[0].downloads.downloads.map(download => getCollectionById("downloads", slugify(download))) : null;
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const productLinesData = getAllCollections("productLines");
  const productsData = getAllCollections("products");

  return {
    props: {
      productData,
      instructionsData,
      provincesData,
      localesData,
      downloadsData,
      productLinesData,
      productsData
    }
  }
}