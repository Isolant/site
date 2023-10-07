import React from "react";
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import Button from '../Forms/Button';
import Product from '../Product';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.css';

import { standardTextClasses, boldTitleClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding } from "../../classes/Spacing";

import {ReactComponent as Dots} from '../../public/images/misc/dots.svg';

export default function HighlightedProducts({
  products,
}) {

  const settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `${horizontalPadding} ${styles.HeroSlider}`,
    draggable: true,
  };

  return (
    <section>
      <Slider
        {...settings}
      >
        {products
          .map((product, index) => {
            const heroSection = product.page.find(section => section.type === 'hero');
            return(
              <div key={index}>
                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                  <div className={`${horizontalPadding} py-4 md:py-8 lg:py-16 relative bg-gray-600`}>
                    <p
                      className={`${uppercaseTextClasses} text-gray-300`}
                    >
                      Producto Destacado
                    </p>
                    <h5 className={`${boldTitleClasses} text-white pt-1 sm:pt-3 pb-4 sm:pb-3`}>{product.name}</h5>
                    <div
                      className={`${standardTextClasses} text-gray-300 grid gap-2`}
                    >
                      <ReactMarkdown>{product.description}</ReactMarkdown>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-8">
                      <Button
                        href={product.globals.ecommerceLink ? product.globals.ecommerceLink : `/contacto?comprar-isolant=${product.id}`}
                        text={"Comprar"}
                        color="primary"
                        isExternal={product.globals.ecommerceLink ? true : false}
                        icon={true}
                        classes="w-full sm:w-auto sm:mr-6 mb-4 sm:mb-0"
                      />
                      <div
                        className={`mt-4 md:mt-0 hover:opacity-80 ${uppercaseTextClasses} text-white`}
                      >
                        <Link
                          href={`/aislantes/${product.id}`}
                        >
                          <a className="md:text-sm">
                            Conoc&eacute; m&aacute;s
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="w-full h-60 md:h-96 lg:h-full relative">
                    <div className="bg-gradient-to-t from-gray-700 absolute w-full h-full z-10" />
                    <div className="h-12 w-12 transform rotate-45 absolute top-2/4 hidden z-10 lg:block bg-gray-600 -left-6" />
                    <Product
                      product={product.globals.productImage}
                      name={product.name}
                      classes="w-24 md:w-48 h-full flex items-end absolute bottom-8 right-8 z-20"
                      decorations={false}
                    />
                    <Dots className="bottom-4 right-4 absolute text-gray-300 fill-current z-0" />
                    <Image
                      src={heroSection.heroImage.mainImage}
                      alt={product.name}
                      className="object-cover"
                      layout="fill"
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