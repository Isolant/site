import React from "react";
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './DetailCards.module.css';

import AlternativeProductCard from "../Cards/AlternativeProductCard";

import { boldSubtitleClasses } from "../../classes/Text";

export default function RelatedProducts({ 
  background,
  title,
  products,
  textColor,
}) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: styles.RelatedProductsSlider,
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
    <section
      className="bg-cover"
      style={{ backgroundImage: background ? `url(${background})` : 'url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)' }}
    >
      <div className="relative -bottom-8 md:-bottom-16 z-10">
        <h5
          className={`${boldSubtitleClasses} ${styles.Title} ${textColor} mb-4 px-4`}
        >
          <ReactMarkdown>{title}</ReactMarkdown>
        </h5>
        <Slider
          {...settings} 
        >
          {products.map((product, index) =>
            <AlternativeProductCard
              product={product[0]}
              key={index}
            />
          )}
        </Slider>
      </div>
    </section>
  )
}