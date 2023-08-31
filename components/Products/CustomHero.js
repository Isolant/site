import React from "react";
import Link from "next/link";

import TitlePackage from '../TitlePackage';
import Button from '../Forms/Button';

import { horizontalPadding } from "../../classes/Spacing";
import { standardTextClasses } from "../../classes/Text";

export default function CustomHero({ 
  background,
  backgroundPosition,
  product,
  eyebrow,
  slogan,
  description,
  logo
}) {
  return (
    <section
      className={`relative flex items-center flex-col overflow-hidden`}
    >
      <div
        className="bg-gray-800 w-full h-full absolute lg:relative xl:max-h-screen"
      >
        <img
          src={background}
          alt={product}
          className={`
            opacity-40 w-full h-full object-cover
            ${backgroundPosition && backgroundPosition === 'top' ?
              'object-top'
            :
              backgroundPosition && backgroundPosition === 'center' ?
              'object-center'
            :
              'object-bottom'
            }
          `}
        />
        <div className="absolute top-1/2 left-1/2 z-10">
          {eyebrow}
          {slogan}
          {description}
          <img
            src={logo}
            alt={product}
          />
        </div>
      </div>
    </section>
  )
}