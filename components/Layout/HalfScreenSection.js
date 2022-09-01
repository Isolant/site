// Globals
import React from "react";
import Image from 'next/image';

// Classes
import { fullBleedContainer } from '../../classes/Layout';
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

// Components
import TitlePackage from "../TitlePackage";

export default function HalfScreenSection({
  image,
  imagePosition,
  title,
  text,
  buttons,
  theme,
  height,
  Logo,
  children,
  classes,
  id,
  twoRowsLayout
}) {
  return (
    <section
      className={`
        ${height === 'full' ? fullBleedContainer : ''}
        relative grid lg:grid-cols-2
        ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}
        ${classes && classes}
      `}
      id={id && id}
    >
      <div
        className={`w-full h-96 ${twoRowsLayout === true ? 'row-span-2' : ''} ${height === 'full' ? 'lg:h-screen' : 'lg:h-auto'} relative order-first ${imagePosition === "right" ? 'lg:order-last' : ''}`}
      >
        <Image 
          src={image}
          className="object-cover"
          layout="fill"
        />
      </div>
      <div
        className={`${horizontalPadding} ${verticalPadding} relative flex flex-col justify-center items-start max-w-2xl`}
      >
        <div
          className={`
            ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}
            ${imagePosition === 'left' ? '-left-6' : '-right-6'}
            h-12 w-12 transform rotate-45 absolute hidden lg:block`
          }
        />
        {Logo && <Logo />}
        <TitlePackage
          titleHierarchy="h4"
          title={title}
          text={text}
          buttons={buttons}
          theme={theme}
        />
      </div>
      {children}
    </section>
  )
}