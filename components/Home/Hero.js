import React from "react";
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.css';

import { fullBleedContainer } from "../../classes/Layout";
import { horizontalPadding } from "../../classes/Spacing";

import TitlePackage from "../TitlePackage";
import Link from "next/link";

export default function Hero({ slider }) {
  
  const PrevArrow = (props) => {
    const { onClick } = props;

    return (
      <button
        className="z-10 absolute transition duration-100 hover:opacity-80 h-full px-4 w-auto hidden lg:block left-0"
        onClick={onClick}
      >
        <svg fill="none" height="22" viewBox="0 0 11 22" width="11" xmlns="http://www.w3.org/2000/svg"><path d="m10.4688.734347c.1874.140625.2343.328123.2343.515623s-.0469.375-.1875.51563l-8.53122 9.2344 8.48442 9.2812c.2812.2813.2812.75-.0469 1.0313-.2813.2812-.75002.2812-1.03128-.0469l-8.999995-9.75c-.28125-.2813-.28125-.7031 0-.9844l8.999995-9.749978c.32813-.328125.79688-.328125 1.07818-.046875z" fill="#fff"/></svg>
      </button>
    )
  }
  
  const NextArrow = (props) => {
    const { onClick } = props;

    return (
      <button
        className="z-10 absolute transition duration-100 hover:opacity-80 h-full px-4 w-auto hidden lg:block top-0 right-0"
        onClick={onClick}
      >
        <svg fill="none" height="22" viewBox="0 0 11 22" width="11" xmlns="http://www.w3.org/2000/svg"><path d="m.484375 21.3125c-.1875-.1407-.28125-.3282-.28125-.5157s.09375-.375.234375-.5156l8.48438-9.2344-8.48438-9.2812c-.28125-.28125-.28125-.75.046875-1.031253.28125-.28125.750005-.28125 1.031245.046875l8.99998 9.749978c.2813.2813.2813.7031 0 .9844l-8.99998 9.75c-.28124.3281-.749995.3281-1.031245.0469z" fill="#fff"/></svg>
      </button>
    )
  }

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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section
      className="relative lg:flex lg:items-center lg:flex-row"
    >
      <Slider
        {...settings} 
        className="w-full lg:h-screen relative"
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
                className={`${fullBleedContainer} mt-12 md:mt-16 h-60 md:h-96 relative -mb-4 bg-gray-800`}
              >
                <Link
                  href={content.ctaLink}
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    className={`w-full h-full cursor-pointer object-top ${content.title ? 'opacity-40' : ''}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
                {content.title &&
                  <div className={`${horizontalPadding} relative xl:absolute h-full flex justify-center flex-col container z-10 lg:max-w-lg xl:max-w-xl pt-12 md:pt-16 lg:pt-0 lg:ml-8 xl:ml-0`}>
                    <TitlePackage
                      titleHierarchy="h1"
                      title={content.title}
                      text={content.text}
                      buttons={button}
                      theme="dark"
                    />
                  </div>
                }
              </div>
            )
        })}
      </Slider>
    </section>
  )
}