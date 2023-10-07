import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import AttributeCard from '../Cards/AttributeCard';

import { boldTitleClasses, standardTextClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import { ReactComponent as ArrowIcon } from '../../public/images/icons/two-arrows-down.svg';

export default function Attributes({ 
  title,
  text,
  attributes,
  background,
  shouldExpand,
  color
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      style={{ backgroundImage: background ? `url(${background})` : '' }}
      className={`
        relative
        ${verticalPadding}
        ${isExpanded === false ? 'overflow-y-hidden max-h-screen lg:max-h-full' : ''}
      `}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-8 lg:gap-12 pt-8 md:pt-12"
        >
          {attributes.map((attribute, index) =>
            <AttributeCard
              key={index}
              attribute={attribute}
            />
          )}
        </ul>
      </div>
      {shouldExpand !== false &&
        <div className="absolute w-full bottom-0 lg:hidden h-48 bg-gradient-to-t from-white flex items-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${uppercaseTextClasses} text-gray-700 bg-white flex items-center p-4 rounded-full border border-gray-200 mx-auto mb-6`}
          >
            <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} fill-current text-gray-300 mr-4`} />
            {isExpanded === true ?
              "Menos atributos"
              :
              "Más atributos"
            }
            <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} fill-current text-gray-300 ml-4`} />
          </button>
        </div>
      }
    </section>
  )
}