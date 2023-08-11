// Globals
import React from "react";
import Image from 'next/image';
import Slider from "react-slick";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './HeroSlider.module.css';

// Classes
import { fullBleedContainer } from "../../classes/Layout";
import { horizontalPadding } from "../../classes/Spacing";

// Components
import TitlePackage from "../TitlePackage";

export default function HeroSlider({ slider }) {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.HeroSliderDots,
    draggable: true,
  };

  return (
    <section
      className="relative lg:flex lg:items-center lg:flex-row min-h-screen"
    >
      <Slider
        {...settings} 
        className={`w-full ${styles.HeroSlider}`}
      >
        {slider
          .map((content, index) => {
            const button = [{
              link: content.ctaLink,
              text: content.ctaText,
              icon: true,
              color: 'transparent',
              isExternal: false,
            }];

            return(
              <div 
                key={index}
                className={`${fullBleedContainer} h-96 bg-gray-800`}
              >
                <Image
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full opacity-40"
                  layout="fill"
                  objectFit="cover"
                />
                <div className={`${horizontalPadding} relative xl:absolute h-full flex justify-center flex-col container z-10 lg:max-w-lg xl:max-w-xl pt-12 md:pt-16 lg:pt-0 lg:ml-8 xl:ml-0`}>
                  <TitlePackage
                    titleHierarchy="h1"
                    title={content.title}
                    text={content.text}
                    buttons={button}
                    theme="dark"
                  />
                </div>
              </div>
            )
        })}
      </Slider>
    </section>
  )
}