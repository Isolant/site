import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import AttributeCard from '../Cards/AttributeCard';

import { boldTitleClasses, standardTextClasses } from "../../classes/Text";
import { horizontalPadding } from "../../classes/Spacing";

export default function Attributes({ 
  title,
  text,
  attributes,
  background,
  color
}) {
  return (
    <section
      style={{ backgroundImage: background ? `url(${background})` : 'url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)' }}
    >
      <div
        className={`
          ${horizontalPadding}
          relative mx-auto container text-center
        `}
      >
        <h4
          className={`
            ${boldTitleClasses}
            text-gray-800
          `}
          style={{color: color && color}}
          >
          <ReactMarkdown>{title}</ReactMarkdown>
          <div
            className={`
              ${standardTextClasses}
              text-gray-600
              mt-2
            `}
          >
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </h4>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-8 lg:gap-12 pt-8 md:pt-12 pb-8 md:pb-12 lg:pb-16"
        >
          {attributes.map((attribute, index) =>
            <AttributeCard
              key={index}
              attribute={attribute}
              color={color}
            />
          )}
        </ul>
      </div>
    </section>
  )
}