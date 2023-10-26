import React from "react";
import ReactMarkdown from 'react-markdown';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Details.module.css';

import { standardTextClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, topPadding } from "../../classes/Spacing";

export default function Details({ 
  background,
  description,
  technicalInformationTitle,
  technicalInformation,
  colorsTitle,
  colors,
  images,
  product
}) {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    className: styles.detailsSlider,
    draggable: true,
  };

  return (
    <section
      style={{ backgroundImage: background ? `url(${background})` : '' }}
      className={`
        relative
        ${topPadding}
      `}
    >
      <div
        className={`
          ${horizontalPadding}
          relative mx-auto container
          grid grid-cols-1 lg:grid-cols-2 xl:items-center gap-6
        `}
      >
        {/* Text content */}
        <div
          className={`
            ${standardTextClasses}
            text-gray-800
            grid grid-cols-1 gap-6
            order-last lg:order-first
          `}
        >
          {description &&
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          }
          {technicalInformation &&
            <div
              className="grid grid-cols-1 gap-3"
            >
              {technicalInformationTitle &&
                <h3
                  className={`
                    ${uppercaseTextClasses} font-medium text-gray-700
                  `}
                >
                  {technicalInformationTitle}
                </h3>
              }
              <ul
                className="
                  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4
                  items-baseline justify-between
                  bg-white border border-gray-200 rounded-md py-3 px-5
                "
              >
                {technicalInformation.map((info, index) =>
                  <li
                    key={index}
                    className="grid grid-cols-1 gap-2"
                  >
                    <p
                      className={`${uppercaseTextClasses} text-gray-600`}
                    >
                      {info.title}
                    </p>
                    <span>{info.text}</span>
                  </li>
                )}
              </ul>
            </div>
          }
          {colors &&
            <div
              className="grid grid-cols-1 gap-4"
            >
              {colorsTitle &&
                <h3
                  className={`
                    ${uppercaseTextClasses} font-medium text-gray-700
                  `}
                >
                  {colorsTitle}
                </h3>
              }
              <ul
                className="
                  flex items-center gap-4
                "
              >
                {colors.map((color, index) =>
                  <li
                    key={index}
                    className="grid gap-2"
                  >
                    <div
                      className={`
                        w-8 h-8 rounded-full mx-auto
                      `}
                      style={{ backgroundColor: color.color}}
                    />
                    <p
                      className={`${standardTextClasses} text-gray-800`}
                    >
                      {color.name}
                    </p>
                  </li>
                )}
              </ul>
            </div>
          }
        </div>
        {/* Image slider */}
        <div className="w-full">
          <Slider
            {...settings} 
          >
            {images.map((image, index) =>
              <img
                src={image.image}
                key={index}
                alt={product}
                className="w-full rounded-lg"
              />
            )}
          </Slider>
        </div>
      </div>
    </section>
  )
}