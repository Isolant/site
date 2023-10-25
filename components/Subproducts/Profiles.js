import React from "react";
import ReactMarkdown from 'react-markdown';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { smallTextClasses, thinTitleClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import styles from './Profiles.module.css';

export default function Profiles({ 
  title,
  image,
  profiles
}) {
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: styles.profilesSlider,
    draggable: true,
  };

  return (
    <section
      className={`
        relative
        bg-gray-100
        ${verticalPadding}
      `}
    >
      <div
        className={`
          ${horizontalPadding}
          relative mx-auto container
        `}
      >
        <h4
          className={`
            ${thinTitleClasses}
            ${styles.Title}
            text-gray-800
          `}
        >
          <ReactMarkdown>{title}</ReactMarkdown>
        </h4>
        <ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center pt-8"
        >
          <li>
            <img
              src={image}
              alt={title}
            />
          </li>
          <li>
            <Slider
              {...settings} 
            >
              {profiles.map((profile, index) =>
                <div className="w-full">
                  <div className="relative">
                    <img
                      src={profile.image}
                      alt={profile.title}
                      className="rounded-t-md"
                    />
                    <span
                      className={`
                        absolute left-0 bottom-0
                        px-4 py-3
                        bg-gray-400 text-white
                        font-semibold
                        ${uppercaseTextClasses}
                      `}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <p
                    className={`
                      ${smallTextClasses}
                      mt-4 text-gray-600
                      h-24
                    `}
                  >
                    {profile.text}
                  </p>
                </div>
              )}
            </Slider>            
          </li>
        </ul>
      </div>
    </section>
  )
}