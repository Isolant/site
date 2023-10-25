import React from "react";
import ReactMarkdown from 'react-markdown';

import { boldSubtitleClasses, boldTitleClasses, standardTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import styles from './Calculation.module.css';

export default function Calculation({ 
  background,
  title,
  text,
  color,
  image,
  steps
}) {
  return (
    <section
      className={`
        relative
        ${verticalPadding}
      `}
      style={{ backgroundImage: background ? `url(${background})` : '' }}
    >
      <div
        className={`
          ${horizontalPadding}
          relative mx-auto container
        `}
      >
        <ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
        >
          <li>
            <h4
              className={`
                ${boldSubtitleClasses}
                mb-2
              `}
              style={{ color: color }}
            >
              {title}
            </h4>
            <div
              className={`
                ${styles.Text}
                ${standardTextClasses}
                text-gray-600
              `}
            >
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
            <ol className="pt-6 xl:pt-12">
              {steps.map((step, index) =>
                <li
                  key={index}
                  className="flex items-baseline gap-6"
                >
                  <span
                    className={`
                      ${boldTitleClasses}
                      text-gray-800
                    `}
                  >
                    {index + 1}.
                  </span>
                  <p
                    className={`
                      ${standardTextClasses}
                      text-gray-600
                    `}
                  >
                    {step.text}
                  </p>
                </li>
              )}
            </ol>
          </li>
          <li className="order-first lg:order-last">
            <img
              src={image}
              alt={title}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}