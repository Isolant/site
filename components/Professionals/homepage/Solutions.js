// Globals
import React, { useState } from "react";
import Link from "next/link";

// Classes
import { horizontalPadding, verticalPadding } from '../../../classes/Spacing';
import { boldSubtitleClasses, uppercaseTextClasses, standardTextClasses } from '../../../classes/Text';

// SVGs
import { ReactComponent as ArrowIcon } from '../../../public/images/icons/two-arrows-down.svg';

export default function Solutions({
  title,
  solutions
}) {

  // Initialize variables and state
  const categoriesArray = [];
  const [isExpanded, setIsExpanded] = useState(false);

  // Loop over the existing categories, and store them in the array
  solutions
    .map(solution => {
      categoriesArray.push(solution.category);
  });

  // Get the unique categories from those results
  const uniqueCategories = [...new Set(categoriesArray)];

  return (
    <div className={`${verticalPadding} ${horizontalPadding} mx-auto container relative ${isExpanded === false ? 'overflow-y-hidden max-h-96' : ''}`}>
      <h3
        className={`${boldSubtitleClasses} text-gray-800 pb-4 sm:pb-6`}
      >
        {title}
      </h3>
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {uniqueCategories.map((category, index) => {
          return(
            <li
              key={index}
            >
              <hr
                className="mb-4"
              />
              <h4
                className={`${uppercaseTextClasses} text-gray-900 mb-2`}
              >
                <strong>{category}</strong>
              </h4>
              <ol>
                {
                  solutions.filter(solution => solution.category === category)
                  .map((solution, index) => {
                    return(
                      <li
                        key={index}
                        className={`${standardTextClasses} text-gray-600 mb-2 hover:opacity-80`}
                      >
                        <Link href={`/soluciones/${solution.id}`}>
                          {solution.title}
                        </Link>
                      </li>
                    )
                  })
                }
              </ol>
            </li>
          )
        })}
      </ul>
      <div className="h-16 sm:h-24 bg-gradient-to-t from-gray-100 absolute bottom-0 left-0 w-full z-10 flex items-center justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${uppercaseTextClasses} text-primary flex items-center`}
        >
          <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} text-primary fill-current mr-4`} />
          {isExpanded === true ?
            "Menos soluciones"
            :
            "Más soluciones"
          }
          <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} text-primary fill-current ml-4`} />
        </button>
      </div>
    </div>
  )
}