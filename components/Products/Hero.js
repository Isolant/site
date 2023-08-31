// Globals
import React from "react";
import Link from "next/link";
import Slider from "react-slick";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import TitlePackage from '../TitlePackage';
import Button from '../Forms/Button';

// Classes
import { horizontalPadding } from "../../classes/Spacing";
import { standardTextClasses } from "../../classes/Text";

// SVGs
import { ReactComponent as ChevronDown } from '../../public/images/icons/chevron-down.svg';

export default function Hero({ 
  background,
  backgroundVideo,
  backgroundPosition,
  product,
  enableBuyBtn,
  enableDetailsSection,
  slogan,
  benefits,
  link,
}) {

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    draggable: true,
  };

  const dontPurgeThese = ['xl:grid-cols-1', 'xl:grid-cols-2', 'xl:grid-cols-3', 'xl:grid-cols-4', 'xl:grid-cols-5', 'xl:grid-cols-6'];

  return (
    <section
      className={`relative flex items-center flex-col overflow-hidden`}
    >
      {backgroundVideo !== undefined ?
        <div
          className={`overflow-hidden bg-gray-800 aspect-w-2 aspect-h-2 lg:aspect-w-16 lg:aspect-h-9 2xl:aspect-w-4 2xl:aspect-h-1 absolute lg:relative w-full`}
        >
          <iframe 
            src={`https://www.youtube.com/embed/${backgroundVideo.substring(32)}?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&playlist=${backgroundVideo.substring(32)}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`w-full h-full pointer-events-none opacity-40`}
          ></iframe>
        </div>
      : Array.isArray(background) ?
        <div
          className="bg-gray-800 w-full h-full absolute lg:relative xl:max-h-screen overflow-hidden"
        >
          <Slider
            {...settings} 
          >
            {background.map((image, index) => 
              <img
                src={image}
                alt={product}
                key={index}
                className={`
                  opacity-40 w-full h-full object-cover
                  ${backgroundPosition && backgroundPosition === 'top' ?
                    'object-top'
                    :
                    backgroundPosition && backgroundPosition === 'center' ?
                    'object-center'
                    :
                    'object-bottom'
                  }
                `}
              />
            )}
          </Slider>
        </div>
      :
        <div
          className="bg-gray-800 w-full h-full absolute lg:relative xl:max-h-screen"
        >
          <img
            src={background}
            alt={product}
            className={`
              opacity-40 w-full h-full object-cover
              ${backgroundPosition && backgroundPosition === 'top' ?
                'object-top'
                :
                backgroundPosition && backgroundPosition === 'center' ?
                'object-center'
                :
                'object-bottom'
              }
            `}
          />
        </div>
      }
      <div className={`${horizontalPadding} relative container text-center mx-auto lg:absolute z-10 lg:max-w-lg xl:max-w-xl pt-24 sm:pt-32`}>
        <TitlePackage
          titleHierarchy="h1"
          title={slogan}
          theme="dark"
        />
      </div>
      {benefits &&
        <ul className={`${horizontalPadding} relative lg:absolute bottom-0 py-8 md:py-16 lg:pb-24 lg:pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${benefits.length} w-full gap-4 lg:gap-8`}>
          {benefits.map((benefit, index) => {
            return(
              <li
                key={index}
                className="text-center flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center"
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.text}
                    className="mb-4 mx-auto"
                  />
                </div>
                <p
                  className={`${standardTextClasses} text-white max-w-xs mx-auto`}
                >
                  {benefit.text}
                </p>
              </li>
            )
          })}

          {enableBuyBtn === true ?
            <li
              className="self-end lg:col-span-full xl:col-span-1 text-center mt-4 sm:mt-0"
            >
              <Button
                href={link}
                text="Comprar ahora"
                color="transparent"
                isExternal={true}
              />
            </li>
            : ''
          }
        </ul>
      }
      {enableDetailsSection &&
        <Link
          href="#details"
        >
          <a className="hidden sm:block absolute bottom-8 animate-bounce">
            <ChevronDown className="text-white fill-current" />
          </a>
        </Link>
      }
    </section>
  )
}