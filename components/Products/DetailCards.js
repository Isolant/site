import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './DetailCards.module.css';

import OtherServicesCard from "../Cards/OtherServicesCard";

export default function DetailCards({ 
  cards,
  background,
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
    <section
      className={`
        pt-12 sm:pt-16 md:pt-24
        bg-cover
      `}
      style={{ backgroundImage: background ? `url(${background})` : 'url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)' }}
    >
      <div className="mx-auto container px-4">
        <Slider
          {...settings} 
        >
          {cards.map((card, index) =>
            <OtherServicesCard
              service={card}
              key={index}
            />
          )}
        </Slider>
      </div>
    </section>
  )
}