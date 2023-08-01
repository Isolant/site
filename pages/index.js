// Globals
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// Components
import Base from "../components/Base";
import Hero from "../components/Hero";
import FullScreenSlider from '../components/Layout/FullScreenSlider';
import HalfScreenSection from '../components/Layout/HalfScreenSection';
import FullScreenSection from '../components/Layout/FullScreenSection';

// Library
import { getAllCollections, getCollectionById } from "../lib/collections";

// Content
import { attributes } from "../content/owners/homepage.md";

// SVGs
import {ReactComponent as Dots} from '../public/images/misc/dots.svg';
import {ReactComponent as Circle} from '../public/images/misc/circle.svg';

export default function OwnersHomepage({ productLinesData, productSelectorTypesData, localesData, provincesData }) {
  const router = useRouter();

  let {
    pageTitle,
    heroVideoBackground,
    heroImageBackground,
    heroImageMobile,
    heroTitle,
    heroText,
    heroCtaLink,
    heroCtaText,
    calculatorImage,
    calculatorTitle,
    calculatorText,
    calculatorButtons,
    professionalHomepageImage,
    professionalHomepageTitle,
    professionalHomepageText,
    entrepreneoursImage,
    entrepreneoursTitle,
    entrepreneoursText,
    isoplusImage,
    isoplusTitle,
    isoplusText,
    isoplusCtaLink,
    isoplusCtaText
  } = attributes;

  const heroButton = [{
    link: heroCtaLink,
    text: heroCtaText,
    icon: true,
    color: 'transparent',
    isExternal: false,
  }];
  
  const isoplusButton = [{
    link: isoplusCtaLink,
    text: isoplusCtaText,
    icon: true,
    color: 'transparent',
    isExternal: true,
  }];
  
  const professionalHomepageButton = [{
    text: 'Soy un profesional',
    icon: true,
    color: 'primary',
    isFormBtn: true,
    action: () => {
      localStorage.setItem('userType', 'professionals');
      router.push('/profesionales');
    },
  }];
  
  const entrepreneoursButton = [{
    text: 'Soy un emprendedor',
    icon: true,
    color: 'secondary',
    isExternal: false,
    link: '/nosotros#emprendedores'
  }];

  useEffect(() => {
    // To get the users' type, and redirect accordingly
    const userType = localStorage.getItem('userType');
    if(userType === 'professionals') {
      router.push('/profesionales');
    }
  }, []);

  return (
    <Base
      activePage="owners"
      pageTitle={pageTitle}
      footerTheme="dark"
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={false}
      productLines={productLinesData}
    >
      <Hero
        videoBackground={heroVideoBackground}
        imageBackground={heroImageBackground}
        imageBackgroundMobile={heroImageMobile}
        title={heroTitle}
        text={heroText}
        buttons={heroButton}
        showForm={true}
        productSelectorTypes={productSelectorTypesData}
        fullHeight={true}
        activePage="owners"
      />
      <FullScreenSlider
        content={productLinesData}
      />
      <HalfScreenSection
        image={calculatorImage}
        imagePosition={"left"}
        title={calculatorTitle}
        text={calculatorText}
        buttons={calculatorButtons}
        theme="light"
        height="full"
      >
        <Dots
          className="text-gray-500 fill-current transform -rotate-180 absolute top-4 left-4 hidden lg:block"
        />
        <Dots
          className="text-gray-500 fill-current absolute bottom-4 right-4 hidden lg:block"
        />
      </HalfScreenSection>
      <HalfScreenSection
        image={isoplusImage}
        title={isoplusTitle}
        text={isoplusText}
        buttons={isoplusButton}
        imagePosition={"right"}
        theme="light"
        height="full"
      >
        <Dots
          className="text-gray-500 fill-current transform -rotate-180 absolute top-4 left-4 hidden lg:block"
        />
        <Dots
          className="text-gray-500 fill-current absolute bottom-4 right-4 hidden lg:block"
        />
      </HalfScreenSection>
      <HalfScreenSection
        image={entrepreneoursImage}
        imagePosition={"left"}
        title={entrepreneoursTitle}
        text={entrepreneoursText}
        buttons={entrepreneoursButton}
        theme="light"
        height="full"
      >
        <Dots
          className="text-gray-500 fill-current transform -rotate-180 absolute top-4 left-4 hidden lg:block"
        />
        <Dots
          className="text-gray-500 fill-current absolute bottom-4 right-4 hidden lg:block"
        />
      </HalfScreenSection>
      <FullScreenSection
        image={professionalHomepageImage}
        imagePosition={"right"}
        title={professionalHomepageTitle}
        text={professionalHomepageText}
        buttons={professionalHomepageButton}
        theme="dark"
        height="full"
        layout="boxed"
      >
        <Dots className="hidden lg:block absolute left-4 xl:left-16 bottom-4 xl:-bottom-8 text-gray-100 fill-current z-10 transform rotate-90" />
        <Circle className="hidden lg:block absolute right-4 xl:right-16 -bottom-8 text-red-200 fill-current z-10" />
      </FullScreenSection>
    </Base>
  )
}

export async function getStaticProps() {
  const productSelectorTypesData = getAllCollections("productSelector/types");
  const productLinesData = getAllCollections("productLines");
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');

  return {
    props: {
      productLinesData,
      productSelectorTypesData,
      provincesData,
      localesData
    },
  };
}
