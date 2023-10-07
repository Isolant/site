import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import { standardTextClasses, boldSubtitleClasses } from "../../classes/Text";

import styles from './CustomHero.module.css';

export default function CustomHero({ 
  background,
  backgroundPosition,
  product,
  eyebrow,
  slogan,
  description,
  logo,
  color,
  isSiding
}) {
  return (
    <section
      className={`relative flex items-center flex-col overflow-hidden`}
    >
      <div
        className="w-full h-full relative xl:max-h-screen"
      >
        <img
          src={background}
          alt={product}
          className={`
            w-full h-full object-cover absolute
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
        <div className="relative container mx-auto px-4 md:px-8 min-h-screen md:min-h-[70vh] xl:min-h-screen">
          {logo &&
            <div className="absolute top-24 lg:top-auto lg:bottom-12 z-10 w-36 lg:w-auto">
              <img
                src={logo}
                alt={product}
              />
            </div>
          }
          <div
            className={`
              grid gap-2
              absolute
              bottom-0 right-0 z-10
              bg-white bg-opacity-80
              p-4 md:p-8
              lg:max-w-2xl
              ${color && `border-l-8 border-solid`}
            `}
            style={{ borderLeftColor: color ? color : 'black'}}
          >
            <h1
              className={`
                ${isSiding ?
                    // Update styles here since we use a condensed font
                    'font-condensed text-4xl md:text-6xl'
                  :
                    'font-sans'
                }
              `}
              style={{ color: color ? color : 'text-gray-800'}}
            >
              <ReactMarkdown>{slogan}</ReactMarkdown>
            </h1>
            <h2
              className={`
                text-gray-800
                ${boldSubtitleClasses}
              `}
            >
              <ReactMarkdown>{eyebrow}</ReactMarkdown>
            </h2>
            <div
              className={`
                text-gray-800
                ${styles.Description}
                ${standardTextClasses}
              `}
            >
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}