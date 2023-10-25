import React from "react";
import ReactMarkdown from 'react-markdown';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { thinTitleClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import InstructionsCard from '../Cards/InstructionsCard';

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
                <InstructionsCard
                  key={index}
                  image={profile.image}
                  title={profile.title}
                  text={profile.text}
                  numberActive={true}
                  index={index}
                />
              )}
            </Slider>            
          </li>
        </ul>
      </div>
    </section>
  )
}