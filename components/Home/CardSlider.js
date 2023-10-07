import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './CardSlider.module.css';

import OtherServicesCard from '../Cards/OtherServicesCard';

import { boldSubtitleClasses } from "../../classes/Text";
import { horizontalPadding } from "../../classes/Spacing";

export default function OtherServices({
  title,
  services,
  boxed,
  noBackground,
  smallPadding,
  color,
  decorator
}) {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: styles.Slider,
    adaptiveHeight: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      ]
  };

  return (
    <div
      className={`
        -mt-12 lg:mt-0 pb-4 sm:pb-16 lg:pb-24
        ${noBackground === true ? styles.noBackground : 'bg-gray-100'}
      `}
    >
      <div
        className={`
          ${boxed === true ? horizontalPadding : ''} 
          ${smallPadding === true ? 'pt-8 md:pt-12' : 'pt-16 md:pt-24'}
          px-4 md:px-6 lg:px-8 xl:px-0 mx-auto container
        `}
      >
        {title &&
          <h3
            className={`${boldSubtitleClasses} text-gray-800 pb-2 sm:pb-6`}
          >
            {title}
          </h3>
        }
        <Slider
          {...settings}
        >
          {services
            .map((service, index) => {
              return(
                <OtherServicesCard
                  key={index}
                  service={service}
                  color={color}
                  decorator={decorator}
                />
              )
          })}
        </Slider>
      </div>
    </div>
  )
}