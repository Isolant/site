// Globals
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStyles from './HistorySlider.module.css';

// Classes
import { boldSubtitleClasses, boldTitleClasses, smallTextClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

export default function HistorySlider({
  title,
  timeline
}) {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    className: SliderStyles.Slider,
    adaptiveHeight: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      ]
  };

  return (
    <div className={`${verticalPadding} ${horizontalPadding} mx-auto container mt-4`}>
      <h3
        className={`${boldSubtitleClasses} px-4 md:px-6 lg:px-8 xl:px-0 text-gray-800 pb-4 sm:pb-6`}
      >
        {title}
      </h3>
      <Slider
        {...settings} 
      >
        {timeline
          .map((historyItem, index) => {
            return(
              <div
                key={index}
              >
                <Image
                  src={historyItem.image}
                  alt={historyItem.title}
                  className="rounded-full"
                  width={128}
                  height={128}
                  layout="fixed"
                />
                <h4
                  className={`${boldTitleClasses} text-primary my-4`}
                >
                  {historyItem.year}
                </h4>
                <hr />
                <h4
                  className={`${uppercaseTextClasses} text-gray-700 mt-4 mb-2 h-10`}
                >
                  <span className="font-bold">{historyItem.title}</span>
                </h4>
                <p
                  className={`${smallTextClasses} text-gray-500 h-56`}
                  dangerouslySetInnerHTML={{ __html: historyItem.text}}
                />
              </div>
            )
        })}
      </Slider>
    </div>
  )
}