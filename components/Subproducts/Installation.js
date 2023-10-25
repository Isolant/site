import React from "react";
import ReactMarkdown from 'react-markdown';

import { smallTextClasses, thinTitleClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import styles from './Installation.module.css';

export default function Installation({ 
  title,
  instructions
}) {
  return (
    <section
      className={`
        relative
        bg-gray-100
        ${verticalPadding}
      `}
    >
      <div
        className={`
          ${horizontalPadding}
          relative mx-auto container
        `}
      >
        <div
          className="grid grid-cols-1 gap-4"
        >
          <p
            className={`
              ${uppercaseTextClasses}
              text-gray-800
            `}
          >
            Reglas básicas
          </p>
          <h4
            className={`
              ${thinTitleClasses}
              ${styles.Title}
              text-gray-800
            `}
          >
            <ReactMarkdown>{title}</ReactMarkdown>
          </h4>
        </div>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pt-8"
        >
          {instructions.steps.map((instruction, index) =>
            <li
              key={index}
            >
              <div className="relative">
                <img
                  src={instruction.stepImage}
                  alt={title}
                  className="rounded-t-md"
                />
                <span
                  className={`
                    absolute left-0 bottom-0
                    px-4 py-3
                    bg-gray-400 text-white
                    font-semibold
                    ${uppercaseTextClasses}
                  `}
                >
                  {index + 1}
                </span>
              </div>
              <p
                className={`
                  ${smallTextClasses}
                  mt-4 text-gray-600
                `}
              >
                {instruction.stepText}
              </p>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}