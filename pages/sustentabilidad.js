import React from "react";

import Base from "../components/Base";
import Hero from "../components/Hero";
import InsetCallout from "../components/Layout/InsetCallout";
import ServiceCard from "../components/Cards/ServiceCard";
import TimelineSlider from "../components/AboutUs/TimelineSlider";
import Philosophy from "../components/AboutUs/Philosophy";
import PhilosophyVideo from "../components/Products/Video";
import ODS from "../components/Sustainability/ODS";
import CardSlider from "../components/Home/CardSlider";
import Logos from "../components/Sustainability/Logos";
import ContactForm from "../components/AboutUs/ContactForm";

import { ReactComponent as SustainabilityLogo } from '../public/images/logos/logo-isolant-sustentable.svg';
import { ReactComponent as ODSLogo } from '../public/images/sustainability/ods/logo.svg';

import { getAllCollections } from '../lib/collections';

import { attributes } from "../content/sustainability.md";

import { horizontalPadding, verticalPadding } from "../classes/Spacing";
import { boldSubtitleClasses } from "../classes/Text";

export default function Sustainability({ productLinesData, productsData }) {
  let {
    pageTitle,
    heroEnabled,
    heroVideoBackground,
    heroVideoImage,
    heroImageMobile,
    heroTitle,
    heroText,
    heroCtaLink,
    heroCtaText,
    policiesEnabled,
    policiesTitle,
    policies,
    timelineEnabled,
    timelineTitle,
    timeline,
    sustainabilityVideoEnabled,
    sustainabilityVideo,
    philosophyEnabled,
    philosophyTitle,
    philosophy,
    odsEnabled,
    ods,
    newsEnabled,
    newsTitle,
    newsSlider,
    logosEnabled,
    logosTitle,
    logos,
    contactFormEnabled,
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
      footerTheme="dark"
      pageTitle={pageTitle}
      footerDecorations={true}
      productLines={productLinesData}
    >
      {heroEnabled &&
        <Hero
          videoBackground={heroVideoBackground}
          imageBackground={heroVideoImage}
          imageBackgroundMobile={heroImageMobile}
          logo={<SustainabilityLogo />}
          title={heroTitle}
          text={heroText}
          buttons={heroButton}
          showForm={false}
        />
      }
      <section
        className="bg-gray-100"
      >
        {policiesEnabled &&
          <InsetCallout
            decorations={true}
            gridClasses={`grid gap-8 grid-cols-1 sm:grid-cols-2`}
          >
            <h2
              className={`${boldSubtitleClasses} text-sustainability md:col-span-full justify-center flex gap-1`}
              dangerouslySetInnerHTML={{ __html: policiesTitle }}
            />
            {policies.map((info, index) => 
              <li
                key={index}
              >
                <ServiceCard
                  service={info}
                  isSustainability={true}
                  classes={`max-w-sm mx-auto`}
                />
              </li>
            )}
          </InsetCallout>
        }
        {timelineEnabled &&
          <TimelineSlider
            title={timelineTitle}
            timeline={timeline}
            isSustainability={true}
          />
        }
        {philosophyEnabled &&
          <Philosophy
            title={philosophyTitle}
            philosophy={philosophy}
            isSustainability={true}
          />
        }
      </section>
      {odsEnabled &&
        <ODS
          logo={<ODSLogo className="mx-auto scale-50" />}
          ods={ods}
        />
      }
      {sustainabilityVideoEnabled &&
        <PhilosophyVideo
          video={sustainabilityVideo}
        />
      }
      {newsEnabled &&
        <CardSlider
          title={newsTitle}
          services={newsSlider}
          boxed={true}
        />
      }
      {logosEnabled &&
        <Logos
          title={logosTitle}
          logos={logos}
        />
      }
      {contactFormEnabled &&
        <section className="bg-gray-100">
          <div className={`${horizontalPadding} ${verticalPadding} mx-auto container`}>
            <ContactForm
              products={productsData}
              title={contactFormTitle}
              text={contactFormText}
            />
          </div>
        </section>
      }
    </Base>
  )
}

export async function getStaticProps() {
  const productsData = getAllCollections("products");
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      productsData,
      productLinesData,
    },
  };
}
