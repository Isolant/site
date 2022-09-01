// Globals
import React from "react";
import Image from 'next/image';

// Classes
import { fullBleedContainer } from '../../classes/Layout';
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

// Components
import TitlePackage from "../TitlePackage";

export default function FullScreenSection({
  background,
  backgroundPosition,
  image,
  title,
  text,
  buttons,
  theme,
  height,
  Logo,
  children,
  classes,
  layout,
  id
}) {
  return (
    <section className={
      `
        ${height === 'full' ? fullBleedContainer : ''}
        relative
        ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}
        ${classes && classes}
      `
    }
    id={id && id}
    >
      <div
        className={`w-full absolute top-0 h-full ${height === 'full' ? 'lg:h-screen' : ''}`}
      >
        <Image 
          src={background ? background : image}
          className={`
            object-cover opacity-40
            ${backgroundPosition && backgroundPosition === 'top' ?
              'object-top'
              :
              backgroundPosition && backgroundPosition === 'center' ?
              'object-center'
              :
              'object-bottom'
            }
          `}
          alt={title}
          layout="fill"
        />
      </div>
      <div
        className={`
          ${horizontalPadding} ${verticalPadding} 
          relative flex flex-col justify-center h-full
          ${layout === 'centered'
            ?
              'mx-auto items-center'
            :
            layout === 'boxed'
            ?
              'max-w-2xl items-start'
            : ''
          }
        `}
      >
        {background &&
          <img
            src={image}
            alt={title}
            className="my-4 sm:my-8 w-auto max-w-md mx-auto"
          />
        }
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