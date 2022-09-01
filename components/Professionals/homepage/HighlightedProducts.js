// Globals
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';

// Components
import Button from '../../Forms/Button';
import Product from '../../Product';

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStyles from './ProductLinesSlider.module.css';
import HighlightedProductsStyles from './HighlightedProducts.module.css';

// Classes
import { standardTextClasses, boldTitleClasses, uppercaseTextClasses } from "../../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../../classes/Spacing";

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
    dotsClass: `${horizontalPadding} ${SliderStyles.ProductsSliderDots}`,
    draggable: true,
  };

  return (
    <section className="bg-gray-600">
      <Slider
        {...settings}
      >
        {products
          .map((product, index) => {
            return(
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                  <div className={`${horizontalPadding} ${verticalPadding} order-1 lg:order-none relative`}>
                    <div>
                      <p
                        className={`${uppercaseTextClasses} text-gray-300`}
                      >
                        Aislante Destacado
                      </p>
                      <h5 className={`${boldTitleClasses} text-white pt-1 sm:pt-3 pb-4 sm:pb-6`}>{product.name}</h5>
                    </div>
                    <Product
                      product={product.productImage}
                      name={product.name}
                      classes={`${HighlightedProductsStyles.Product} mb-8 w-24`}
                      decorations={false}
                    />
                    <div>
                      <p
                        className={`${standardTextClasses} text-gray-300`}
                        dangerouslySetInnerHTML={{ __html: product.description }}
                      />
                      <div className="flex flex-col sm:flex-row items-center mt-8">
                        <Button
                          href={product.ecommerceLink ? product.ecommerceLink : `/contacto?comprar-isolant=${product.id}`}
                          text={"Comprar"}
                          color={'secondary'}
                          isExternal={product.ecommerceLink ? true : false}
                          icon={true}
                          classes="w-full sm:w-auto sm:mr-6 mb-4 sm:mb-0"
                        />
                        <Button
                          href={`/aislantes/${product.id}`}
                          text={"Conocé Más"}
                          color={'transparent'}
                          isExternal={false}
                          icon={false}
                          classes="w-full sm:w-auto opacity-60 hover:opacity-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full relative">
                    <div className="bg-gradient-to-t from-gray-700 absolute w-full h-full z-10" />
                    <div className="h-12 w-12 transform rotate-45 absolute top-2/4 hidden z-10 lg:block bg-gray-600 -left-6" />
                    <Image
                      src={product.mainImage}
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