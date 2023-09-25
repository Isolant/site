import React, { useState } from "react";

import Button from "../Forms/Button";

import { boldSubtitleClasses, standardTextClasses, thinTitleClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import styles from './Philosophy.module.css';

import {ReactComponent as ChevronRightIcon } from '../../public/images/icons/chevron-right.svg';

export default function Philosophy({
  title,
  philosophy,
  isSustainability
}) {
  const [activeItem, setActiveItem] = useState(philosophy[0]);

  return (
    <section
      className={`relative grid lg:grid-cols-2 bg-white`}
      id="philosophy"
    >
      <div className={`relative flex flex-col justify-center bg-gray-600 ${horizontalPadding} ${verticalPadding}`}>
        <h4
          className={`${thinTitleClasses} text-white ${styles.Title}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <ul className="lg:mt-4">
          {philosophy.map((item, index) => {
            return (
              <li
                className={`my-4`}
                key={index}
              >
                <button
                  className={
                    `
                      rounded-md text-left transition ease-in-out duration-75 p-4 w-full text-white
                      ${standardTextClasses}
                      flex items-center
                      hover:shadow-lg group
                      ${item.title === activeItem.title ? `${isSustainability ? 'bg-sustainability' : 'bg-primary'} shadow-lg` : 'shadow-md'}
                      `
                    }
                  onClick={() => setActiveItem(item)}
                >
                  <span
                    className={`
                      group-hover:opacity-100 flex-1
                      ${item.title === activeItem.title ? `opacity-100` : 'opacity-60'}
                    `}
                  >
                    {item.title}
                  </span>
                  <ChevronRightIcon 
                    className={`
                      text-white fill-current
                      group-hover:opacity-60
                      ${item.title === activeItem.title ? `opacity-60` : 'opacity-30'}
                    `}
                  />
                </button>
              </li>
            )
          })}
        </ul>
        <div
          className={`-right-6 h-12 w-12 transform rotate-45 absolute hidden lg:block bg-gray-600`}
        />
      </div>
      <div
        className={`${horizontalPadding} ${verticalPadding}`}
      >
        <h4
          className={`${boldSubtitleClasses} text-gray-900 mb-2`}
        >
          {activeItem.title}
        </h4>
        <p
          dangerouslySetInnerHTML={{ __html: activeItem.text}}
          className={`${standardTextClasses} ${styles.TextContainer} text-gray-600`}
        />
        {activeItem.ctaLink &&
          <Button
            href={activeItem.ctaLink}
            text={activeItem.ctaText}
            isExternal={false}
            margin="mt-8"
            color={`${isSustainability ? "sustainability" : "secondary"}`}
            isFormBtn={false}
          />
        }
      </div>
    </section>
  )
}