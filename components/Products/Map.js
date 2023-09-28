import React from "react";
import Image from "next/image";

import { boldTitleClasses } from "../../classes/Text";

import styles from './map.module.css';

export default function Map({ 
  children,
  color
}) {
  return (
    <>
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