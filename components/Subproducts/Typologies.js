import React from "react";
import ReactMarkdown from 'react-markdown';

import { regularSubtitleClasses, standardTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import styles from './Typologies.module.css';

export default function Typologies({ 
  background,
  typologies
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {typologies.map((typology, index) =>
            <li
              key={index}
              className="grid grid-cols-1 gap-4"
            >
              <img
                src={typology.image}
                alt={typology.title}
              />
              <h5
                className={`
                  ${regularSubtitleClasses}
                  ${styles.Title}
                  text-gray-700
                `}
              >
                <ReactMarkdown>{typology.title}</ReactMarkdown>
              </h5>
              <div
                className={`
                  ${standardTextClasses}
                  text-gray-600
                  grid grid-cols-1 gap-4
                `}
              >
                <ReactMarkdown>{typology.text}</ReactMarkdown>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}