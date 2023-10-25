import React from "react";
import ReactMarkdown from 'react-markdown';

import { thinTitleClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import InstructionsCard from '../Cards/InstructionsCard';

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
              <InstructionsCard
                image={instruction.stepImage}
                text={instruction.stepText}
                numberActive={true}
                index={index}
              />
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}