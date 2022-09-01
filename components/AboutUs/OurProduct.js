// Globals
import React from "react";
import Image from 'next/image';

// Components
import TitlePackage from '../TitlePackage';

// Classes
import { fullBleedContainer } from '../../classes/Layout';
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

// Styles
import OurProductStyles from './OurProduct.module.css';

export default function OurProduct({
  title,
  text,
  image
}) {
  return (
    <section
      id="producto"
      className={`
        ${fullBleedContainer}
        bg-gray-700
      `}
    >
      <div className={`${OurProductStyles.Container} container mx-auto flex flex-col items-center`}>
        <div
          className={`
            ${horizontalPadding} 
            py-12 sm:py-16
            relative flex flex-col justify-center h-full mx-auto items-center
          `}
        >
          <TitlePackage
            titleHierarchy="h4"
            title={title}
            text={text}
            theme="dark"
          />
        </div>
        <div className="lg:absolute relative lg:-bottom-24 order-first md:order-last mt-8 md:mt-0 z-10 w-full">
          <img
            src={image}
            className="w-10/12 mx-auto"
          />
        </div>
      </div>
    </section>
    // <FullScreenSection
    //   image={image}
    //   title={title}
    //   text={text}
    //   theme="dark"
    //   height="full"
    //   layout="center"
    //   classes={`${OurProductStyles.Container}`}
    //   id="producto"
    // />
  )
}