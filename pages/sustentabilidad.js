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
import Downloads from "../components/Products/Downloads";
import Logos from "../components/Sustainability/Logos";
import Entrepreneurs from "../components/AboutUs/Entrepreneurs";

import { ReactComponent as SustainabilityLogo } from '../public/images/logos/logo-isolant-sustentable.svg';
import { ReactComponent as ODSLogo } from '../public/images/sustainability/ods/logo.svg';

import { getAllCollections } from '../lib/collections';

import { attributes } from "../content/sustainability.md";

import { boldSubtitleClasses } from "../classes/Text";

export default function Sustainability({ productLinesData, downloadsData }) {
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
    sustainabilityEnabled,
    sustainabilityVideo,
    philosophyEnabled,
    philosophyTitle,
    philosophy,
    odsEnabled,
    ods,
    newsEnabled,
    newsTitle,
    newsSlider,
    downloadsEnabled,
    downloadsTitle,
    downloads,
    logosEnabled,
    logosTitle,
    logos,
    contactImage,
    contactEnabled,
    contactTitle,
    contactText,
    contactCtaLink,
    contactCtaText,
  } = attributes;
  let sustainabilityDownloads = [];
  sustainabilityDownloads.push(downloads.map(sustainabilityDownload => downloadsData.find(download => download.title === sustainabilityDownload)));

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
          logo={<SustainabilityLogo className="w-52" />}
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
                  iconSize={index === 0 ? 32 : 42}
                />
              </li>
            )}
            {/* Used for anchor links */}
            <div id="actions" />
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
          logo={<ODSLogo className="mx-auto scale-75" />}
          ods={ods}
        />
      }
      {sustainabilityEnabled &&
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
      {downloadsEnabled &&
        <section style={{ backgroundImage: `url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)`}}>
          <Downloads
            title={downloadsTitle}
            downloads={sustainabilityDownloads[0]}
            noBackground={true}
            shouldExpand={false}
          />
          {logosEnabled &&
            <Logos
              title={logosTitle}
              logos={logos}
            />
          }
        </section>
      }
      {contactEnabled &&
        <Entrepreneurs
          image={contactImage}
          title={contactTitle}
          text={contactText}
          ctaText={contactCtaText}
          ctaLink={contactCtaLink}
        />
      }
    </Base>
  )
}

export async function getStaticProps() {
  const productLinesData = getAllCollections("productLines");
  const downloadsData = getAllCollections("downloads");

  return {
    props: {
      productLinesData,
      downloadsData,
    },
  };
}
