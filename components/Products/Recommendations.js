import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import Recommendation from '../Cards/Recommendation';

import { boldTitleClasses, standardTextClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import { ReactComponent as ArrowIcon } from '../../public/images/icons/two-arrows-down.svg';

export default function Recommendations({ 
  title,
  recommendations,
  product,
  shouldExpand,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative">
      {product === 'Atacama' &&
        <>
          <img
            src="/images/products/atacama/misc-1.svg"
            alt={product}
            className="absolute hidden md:block z-10 -top-12"
          />
          <img
            src="/images/products/atacama/misc-2.svg"
            alt={product}
            className="absolute hidden md:block z-10 right-0 -bottom-12"
          />
        </>
      }
      <div
        style={{ backgroundColor: product === 'Atacama' && "#DCEEFA" || "" }}
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
          </h4>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-8 lg:gap-12 pt-8 md:pt-12"
          >
            {recommendations.map((recommendation, index) =>
              <Recommendation
                key={index}
                recommendation={recommendation}
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
                "Menos recomendaciones"
                :
                "Más recomendaciones"
              }
              <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} fill-current text-gray-300 ml-4`} />
            </button>
          </div>
        }
      </div>
    </section>
  )
}