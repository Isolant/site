import React from "react";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CustomHero.module.css';

import { standardTextClasses, thinTitleClasses, boldSubtitleClasses } from "../../classes/Text";


export default function CustomHero({ 
  images,
  product,
  eyebrow,
  slogan,
  description,
  logo,
  color,
  isSiding
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

  return (
    <section
      className={`relative flex items-center flex-col overflow-hidden`}
    >
      <div
        className="w-full h-full relative"
      >
        <Slider
          {...settings} 
        >
          {images.map((image, index) =>
            <img
              src={image.mainImage}
              key={index}
              alt={product}
              className={`
                w-full h-screen object-cover
                ${image.mainImageBackgroundPosition && image.mainImageBackgroundPosition === 'top' ?
                  'object-top'
                :
                  image.mainImageBackgroundPosition && image.mainImageBackgroundPosition === 'center' ?
                  'object-center'
                :
                  'object-bottom'
                }
              `}
            />
          )}
        </Slider>
        <div className="absolute bottom-0 right-0 lg:right-16 w-full min-h-screen md:min-h-[70vh] xl:min-h-screen">
          <div
            className={`
              grid gap-2 z-10
              absolute bottom-0 right-0
              bg-white bg-opacity-80
              p-4 md:p-8
              lg:max-w-2xl
              ${color && `border-l-8 border-solid`}
            `}
            style={{ borderLeftColor: color || 'black'}}
          >
            {logo &&
              <img
                src={logo}
                alt={product}
                className="max-w-[120px] mb-2"
              />
            }
            <h1
              className={`
                ${styles.Title}
                ${isSiding ?
                    // Update styles here since we use a condensed font
                    'font-condensed text-4xl md:text-6xl'
                  :
                    `font-sans ${thinTitleClasses}`
                }
              `}
              style={{ color: isSiding && color && color || 'text-gray-800'}}
            >
              <ReactMarkdown>{slogan}</ReactMarkdown>
            </h1>
            <h2
              className={`
                text-gray-800
                ${boldSubtitleClasses}
              `}
            >
              <ReactMarkdown>{eyebrow}</ReactMarkdown>
            </h2>
            <div
              className={`
                text-gray-800
                ${styles.Description}
                ${standardTextClasses}
              `}
            >
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}