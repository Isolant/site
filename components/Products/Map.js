import React from "react";
import Image from "next/image";

import { boldTitleClasses, uppercaseTextClasses } from "../../classes/Text";

import styles from './map.module.css';

export default function Map({ 
  children,
  color,
  product,
  logo
}) {
  return (
    <>
      {product === 'Atacama' ?
        <div
          className="relative hidden lg:block h-4 bg-gradient-to-r from-gray-900 to-gray-700"
        >
          <div className="absolute -top-24 -ml-24 left-1/2 text-center z-10">
            <h6
              className={`
                ${uppercaseTextClasses}
                text-gray-700 mb-4
              `}
            >
              Distribuidores
            </h6>
            <img
              src={logo}
              alt={product}
              className="mx-auto w-48"
            />
          </div>
        </div>
      :
        <div
          className="relative flex items-center"
        >
          <div className="hidden md:block">
            <Image
              src="/images/products/iso-siding/arrow.jpg"
              width={190}
              height={130}
            />
          </div>
          <h4
          className={`
            ${boldTitleClasses}
            text-gray-700
            flex items-baseline gap-6 px-4
          `}
          style={{ color: color && color}}
          >
          Distribuidores
          <Image
            src="/images/products/iso-siding/logo-color.png"
            width={140}
            height={52}
            className="relative -top-px"
          />
          </h4>
        </div>
      }
      <section
        className={`
          w-full h-screen relative
          ${styles.iframe}
        `}
      >
        <div
          className="absolute w-full h-full z-10"
          onClick={(e) => e.currentTarget.remove()}
        />
        <div
          dangerouslySetInnerHTML={{ __html: children }}
          className="absolute w-full h-full"
        />
      </section>
    </>
  )
}