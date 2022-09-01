// Globals
import React from "react";
import Slider from "react-slick";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStyles from './ProductLinesSlider.module.css';

// Components
import ProductLineCard from '../../Cards/ProductLineCard';

// Classes
import { boldSubtitleClasses } from "../../../classes/Text";
import { verticalPadding } from "../../../classes/Spacing";

export default function ProductLines({
  title,
  productLines
}) {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: SliderStyles.Slider,
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
    <div className={`${verticalPadding} mx-auto container`}>
      <h3
        className={`${boldSubtitleClasses} px-4 md:px-6 lg:px-8 xl:px-0 text-gray-800 pb-4 sm:pb-6`}
      >
        {title}
      </h3>
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