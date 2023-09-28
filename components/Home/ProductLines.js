import React from "react";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ProductLines.module.css';

import ProductLineCard from '../Cards/ProductLineCard';

import { boldSubtitleClasses, uppercaseTextClasses } from "../../classes/Text";

export default function ProductLines({
  title,
  productLines,
  ctaText,
  ctaLink
}) {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
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
    <div className="pt-12 sm:pt-16 md:pt-24 bg-gray-100 -mt-32 md:-mt-48">
      <div className="pt-24 px-4 md:px-6 lg:px-8 xl:px-0 flex flex-col md:flex-row items-baseline justify-between mx-auto container mb-6 xl:mb-8">
        <h3
          className={`${boldSubtitleClasses} text-gray-800 pb-2 sm:pb-6`}
        >
          {title}
        </h3>
        <Link
          href={ctaLink}
        >
          <a
            className={`${uppercaseTextClasses} text-primary hover:opacity-80 transition ease-in-out duration-100`}
          >
            {ctaText}
          </a>
        </Link>
      </div>
      <Slider
        {...settings} 
      >
        {productLines
          .sort((a, b) => a.order - b.order)
          .map((productLine, index) => {
            return(
              <ProductLineCard
                key={index}
                productLine={productLine}
              />
            )
        })}
      </Slider>
    </div>
  )
}