// Globals
import React from "react";

// Components
import Base from "../components/Base";
import Hero from "../components/Hero";
import InsetCallout from "../components/Layout/InsetCallout";
import ServiceCard from "../components/Cards/ServiceCard";
import PhilosophyVideo from "../components/Products/Video";
import Philosophy from "../components/AboutUs/Philosophy";
import HistorySlider from "../components/AboutUs/HistorySlider";
import OurProduct from "../components/AboutUs/OurProduct";
import Patents from "../components/AboutUs/Patents";
import TechnicalInformation from "../components/AboutUs/TechnicalInformation";
import Entrepreneurs from "../components/AboutUs/Entrepreneurs";
import Policies from "../components/AboutUs/Policies";
import Ethics from "../components/AboutUs/Ethics";
import ContactForm from "../components/AboutUs/ContactForm";

// Library
import { getAllCollections, getCollectionById } from '../lib/collections';

// Content
import { attributes } from "../content/about-us.md";

// Classes
import { horizontalPadding, verticalPadding } from "../classes/Spacing";

export default function AboutUs({ provincesData, localesData, productLinesData, productsData, downloadsData }) {
  let {
    pageTitle,
    heroVideoBackground,
    heroVideoImage,
    heroImageMobile,
    heroTitle,
    heroText,
    heroCtaLink,
    heroCtaText,
    missionVission,
    timelineTitle,
    timeline,
    productImage,
    productTitle,
    productText,
    aboutUsVideo,
    philosophyTitle,
    philosophy,
    patentBackgroundImage,
    patentImage,
    patentTitle,
    patentText,
    patentCtaText,
    patentCtaLink,
    technicalInformationImage,
    technicalInformationTitle,
    technicalInformationText,
    technicalInformationFormTitle,
    technicalInformationFormText,
    technicalInformationCtaText,
    technicalInformationCtaLink,
    entrepreneursImage,
    entrepreneursTitle,
    entrepreneursText,
    entrepreneursCtaText,
    entrepreneursCtaLink,
    policiesTitle,
    policies,
    ethicsImage,
    ethicsTitle,
    ethicsText,
    contactFormTitle,
    contactFormText
  } = attributes;

  const heroButton = [{
    link: heroCtaLink,
    text: heroCtaText,
    icon: true,
    color: 'transparent',
    isExternal: false,
  }];

  return (
    <Base
      activePage="professionals"
      footerTheme="dark"
      pageTitle={pageTitle}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={true}
      productLines={productLinesData}
    >
      <Hero
        videoBackground={heroVideoBackground}
        imageBackground={heroVideoImage}
        imageBackgroundMobile={heroImageMobile}
        title={heroTitle}
        text={heroText}
        buttons={heroButton}
        showForm={false}
      />
      <section className="bg-gray-100">
        <InsetCallout
          decorations={true}
          gridClasses={`grid gap-8 grid-cols-1 sm:grid-cols-2`}
        >
          {missionVission.map((info, index) => 
            <li
              key={index}
            >
              <ServiceCard
                service={info}
                classes={`max-w-sm mx-auto`}
              />
            </li>
          )}
        </InsetCallout>
        <Philosophy
          title={philosophyTitle}
          philosophy={philosophy}
        />
        <PhilosophyVideo
          video={aboutUsVideo}
        />
        <HistorySlider
          title={timelineTitle}
          timeline={timeline}
        />
      </section>
      <OurProduct
        image={productImage}
        title={productTitle}
        text={productText}
      />
      <Patents
        background={patentBackgroundImage}
        image={patentImage}
        title={patentTitle}
        text={patentText}
        ctaLink={patentCtaLink}
        ctaText={patentCtaText}
      />
      <TechnicalInformation
        image={technicalInformationImage}
        title={technicalInformationTitle}
        text={technicalInformationText}
        formTitle={technicalInformationFormTitle}
        formText={technicalInformationFormText}
        ctaText={technicalInformationCtaText}
        ctaLink={technicalInformationCtaLink}
        products={productsData}
      />
      <Entrepreneurs
        image={entrepreneursImage}
        title={entrepreneursTitle}
        text={entrepreneursText}
        ctaText={entrepreneursCtaText}
        ctaLink={entrepreneursCtaLink}
      />
      <Policies
        title={policiesTitle}
        policies={policies.map(policy => downloadsData.filter(download => download.title === policy))}
      />
      <Ethics
        image={ethicsImage}
        title={ethicsTitle}
        text={ethicsText}
      />
      <section className="bg-gray-100">
        <div className={`${horizontalPadding} ${verticalPadding} mx-auto container`}>
          <ContactForm
            products={productsData}
            title={contactFormTitle}
            text={contactFormText}
          />
        </div>
      </section>
    </Base>
  )
}

export async function getStaticProps() {
  const productsData = getAllCollections("products");
  const productLinesData = getAllCollections("productLines");
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const downloadsData = getAllCollections("downloads");

  return {
    props: {
      provincesData,
      localesData,
      productsData,
      productLinesData,
      downloadsData
    },
  };
}
