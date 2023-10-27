import React from "react";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CustomHero.module.css';

import { standardTextClasses, thinTitleClasses, boldSubtitleClasses, uppercaseTextClasses } from "../../classes/Text";


export default function CustomHero({ 
  images,
  product,
  eyebrow,
  slogan,
  description,
  logo,
  color,
  isSiding,
  ctaLink,
  ctaText
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
              {ctaLink &&
                <div
                  className="mt-4"
                >
                  <a
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      ${uppercaseTextClasses}
                      font-semibold
                      text-white
                      inline-flex items-center gap-2
                      py-2 px-3 rounded-full
                      hover:opacity-80
                    `}
                    style={{ background: color }}
                  >
                    <svg fill="none" height="22" viewBox="0 0 21 22" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m10.5.625c5.7832 0 10.5 4.7168 10.5 10.5 0 5.8242-4.7168 10.5-10.5 10.5-5.82422 0-10.5-4.6758-10.5-10.5 0-5.7832 4.67578-10.5 10.5-10.5zm4.7578 11.3613c.2871-.164.4922-.4922.4922-.8613 0-.3281-.2051-.6562-.4922-.8203l-5.90624-3.60939c-.16406-.08203-.32812-.16406-.49218-.16406-.57422 0-.98438.49219-.98438.98437v7.21878c0 .5332.41016.9844.98438.9844.16406 0 .32812-.0411.49218-.1231z" fill="#fff"/></svg>

                    {ctaText}
                  </a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}