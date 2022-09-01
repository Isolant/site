// Globals
import React from "react";
import Image from 'next/image';
import Slider from "react-slick";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStyles from '../Professionals/homepage/ProductLinesSlider.module.css';

// Classes
import { fullBleedContainer } from "../../classes/Layout";

// Components
import TitlePackage from "../TitlePackage";

export default function FullScreenSlider({content}) {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: SliderStyles.SolutionsSlider,
    dotsClass: `${SliderStyles.SolutionsSliderDots}`,
    draggable: true,
  };

  return (
    <section className={`h-96 ${fullBleedContainer}`}>
      <Slider
        {...settings} 
      >
        {content
          .sort((a, b) => a.order - b.order)
          .map((content, index) => {
            return(
              <div 
                key={index}
                className={`${fullBleedContainer} h-96 bg-gray-800`}
              >
                <Image
                  src={content.mainImage}
                  alt={content.title}
                  className="w-full h-full opacity-40"
                  layout="fill"
                  objectFit="cover"
                />
                <div
                  className="text-center bottom-20 sm:bottom-32 absolute w-full flex justify-center"
                >
                  <div
                    className={`max-w-xs lg:max-w-xl`}
                  >
                    <TitlePackage
                      titleHierarchy="h3"
                      title={
                        content.title === 'Accesorios' ?
                          `Conocé nuestros innovadores <strong>${content.title}</strong>`
                        :
                          `Conocé nuestras soluciones para <strong>${content.title}</strong>`
                      }
                      buttons={[{
                        text: 'Ver Soluciones',
                        color: 'transparent',
                        isExternal: false,
                        link: `/lineas-de-producto/${content.id}`
                      }]}
                      theme="dark"
                      additionalButtonClasses="mx-auto"
                    />
                  </div>
                </div>
              </div>
            )
        })}
      </Slider>
    </section>
  )
}