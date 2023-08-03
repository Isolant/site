// Globals
import React from 'react';
import slugify from 'react-slugify';

// Components
import Base from "../../components/Base";
import Hero from "../../components/Products/Hero";
import Details from "../../components/Products/Details";
import Benefits from "../../components/Products/Benefits";
import Video from "../../components/Products/Video";
import Instructions from "../../components/Products/Instructions";
import TechnicalInformation from "../../components/Products/TechnicalInformation";
import Downloads from "../../components/Products/Downloads";
import FullScreenSection from "../../components/Layout/FullScreenSection";

// Library
import { getCollectionIds, getCollectionById, getAllCollections } from '../../lib/collections';

// SVGs
import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';
import { ReactComponent as Circle } from '../../public/images/misc/circle.svg';

export default function Product({ productData, instructionsData, localesData, provincesData, downloadsData, productLinesData }) {
  const colocationButtons = [{
    link: productData.colocationCtaLink,
    text: productData.colocationCtaText,
    icon: false,
    color: 'white',
    isExternal: true,
  }, {
    link: productData.technicalAssessorCtaLink,
    text: productData.technicalAssessorCtaText,
    icon: false,
    color: 'transparent',
    isExternal: false,
  }];
  
  const ctaButtons = [
    {
      link: productData.ecommerceLink ? productData.ecommerceLink : `/contacto?comprar=${productData.id}`,
      text: `Comprá ${productData.name} Aquí`,
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

  let mainImages = [];
  if(productData.mainImage2) {
    mainImages.push(
      productData.mainImage,
      productData.mainImage2
    )
  }

  return (
    <Base
      activePage="professionals"
      pageTitle={productData.name}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={false}
      productLines={productLinesData}
    >
      {productData.enableHero &&
        <Hero
          background={mainImages.length > 0 ? mainImages : productData.mainImage}
          backgroundVideo={productData.mainVideo}
          backgroundPosition={productData.mainImageBackgroundPosition}
          product={productData.name}
          slogan={productData.slogan}
          benefits={productData.mainBenefits}
          enableBuyBtn={false}
          link={productData.ecommerceLink ? productData.ecommerceLink : `/contacto?comprar=${productData.id}`}
        />
      }
      {productData.enableDetailsSection &&
        <Details
          image={productData.detailsImage}
          title={productData.name}
          text={productData.description}
          logo={productData.logo}
          link={productData.ecommerceLink ? productData.ecommerceLink : `/contacto?comprar=${productData.id}`}
          functions={productData.function}
          applications={productData.application}
          presentations={productData.presentation}
          anchor="details"
        />
      }
      {productData.enableBenefitsSection &&
        <Benefits
          image={productData.benefitsImage}
          patent={productData.patentImage}
          subtitle={productData.benefitsSubtitle}
          title={productData.benefitsTitle}
          text={productData.benefitsText}
          logo={productData.logo}
          link={productData.ecommerceLink ? productData.ecommerceLink : `/contacto?comprar=${productData.id}`}
          benefits={productData.benefitsList}
        />
      }
      {productData.enableVideoSection &&
        <Video
          video={productData.video}
        />
      }
      {productData.enableInstructions &&
        <Instructions
          product={productData.name}
          instructions={instructionsData}
          pdf={productData.pdfInstruction && productData.pdfInstruction}
        />
      }
      {productData.enableTechnicalInformation &&
        <TechnicalInformation
          product={productData.name}
          productImage={productData.productImage}
          technicalInformation={productData.technicalInformationList}
          generalInformation={productData.generalInformationList}
        />
      }
      {productData.enableDownloadsSection &&
        <Downloads
          title={productData.downloadsTitle}
          downloads={downloadsData}
        />
      }
      {productData.enableColocationSection &&
        <FullScreenSection
          image={productData.colocationImage}
          title={productData.colocationTitle}
          theme="dark"
          height="full"
          buttons={colocationButtons}
        />
      }
      {productData.enableCtaSection &&
        <FullScreenSection
          image={productData.ctaImage}
          title={productData.ctaTitle ? productData.ctaTitle : productData.slogan}
          backgroundPosition={productData.ctaImageBackgroundPosition}
          theme="dark"
          height="full"
          classes="text-center"
          layout="centered"
          buttons={ctaButtons}
        >
          <Dots className="hidden lg:block absolute left-4 xl:left-16 bottom-4 xl:-bottom-8 text-gray-100 fill-current z-10 transform rotate-90" />
          <Circle className="hidden lg:block absolute right-4 xl:right-16 -bottom-8 text-red-200 fill-current z-10" />
        </FullScreenSection>
      }
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
  const instructionsData = productData.instructions ? productData.instructions.map(product => getCollectionById("instructions", slugify(product))) : null;
  const downloadsData = productData.downloads ? productData.downloads.map(download => getCollectionById("downloads", slugify(download))) : null;
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      productData,
      instructionsData,
      provincesData,
      localesData,
      downloadsData,
      productLinesData
    }
  }
}