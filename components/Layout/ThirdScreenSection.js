// Globals
import React from "react";
import Image from 'next/image';

// Classes
import { fullBleedContainer } from '../../classes/Layout';
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { uppercaseTextClasses } from "../../classes/Text";

// Components
import TitlePackage from "../TitlePackage";

export default function ThirdScreenSection({
  image,
  badge,
  imagePosition,
  subtitle,
  title,
  text,
  buttons,
  theme,
  height,
  Logo,
  children,
  additionalContent,
  anchor
}) {
  return (
    <section
      className={`${height === 'full' ? fullBleedContainer : ''} relative grid lg:grid-cols-5 ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}
      id={anchor && anchor}
    >
      <div
        className={`w-full h-96 relative ${height === 'full' ? 'lg:h-screen' : 'lg:h-auto'} lg:col-span-3 order-first ${imagePosition === "right" ? 'lg:order-last' : ''}`}
      >
        {badge &&
          <div className="absolute top-8 right-8">
            <Image 
              src={badge}
              className="z-10 absolute top-8 right-8"
              width={120}
              height={120}
              layout="fixed"
            />
          </div>
        }
        <Image 
          src={image}
          className="z-0 object-cover"
          layout="fill"
        />
      </div>
      <div
        className={`${horizontalPadding} ${verticalPadding} relative flex flex-col lg:col-span-2 justify-center items-start max-w-2xl`}
      >
        <div
          className={`
            ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}
            ${imagePosition === 'left' ? '-left-6' : '-right-6'}
            h-12 w-12 transform rotate-45 absolute z-10 hidden lg:block`
          }
        />
        {subtitle &&
          <p
            className={`${uppercaseTextClasses} text-gray-500 mb-4`}
            dangerouslySetInnerHTML={{__html: subtitle}}
          />
        }
        {Logo && <Logo />}
        <TitlePackage
          titleHierarchy="h4"
          title={title}
          subtitle={subtitle}
          text={text}
          buttons={buttons}
          theme={theme}
          additionalContent={additionalContent}
        />
      </div>
      {children}
    </section>
  )
}