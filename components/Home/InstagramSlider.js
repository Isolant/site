import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './InstagramSlider.module.css';

export default function InstagramSlider({
  slider
}) {

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    className: styles.Slider,
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-300 to-blue-400">
      <a
        href="https://www.instagram.com/isolant.aislantes/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <div
        className="w-[420px] h-[495px] relative scale-50 md:scale-100"
      >
          <div
            className="bg-no-repeat bg-contain absolute w-full h-full z-10"
            style={{ backgroundImage: 'url("/images/homepage/instagram/frame.png")' }}
          />
          <Slider
            {...settings}
            className={`${styles.Slider} w-10/12 left-[27px] top-14`}
          >
            {slider
              .map((slide, index) => {
                return(
                  <Image
                    src={slide.image}
                    width={400}
                    height={400}
                    objectFit="contain"
                    key={index}
                  />
                )
            })}
          </Slider>
        </div>
      </a>
    </div>
  )
}