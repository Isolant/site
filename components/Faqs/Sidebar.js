// Globals
import React from "react";

// Classes
import { uppercaseTextClasses } from "../../classes/Text";

export default function Sidebar({ categories, activeCategory, updateCategory }) {
  return (
    <aside className={`lg:pt-8`}>
      <ul className="flex flex-row flex-wrap justify-center lg:flex-col lg:justify-start">
        <li className="lg:mb-2 group">
          <button
            data-category="Todas"
            onClick={updateCategory}
            className={`
              ${uppercaseTextClasses}
              group-hover:opacity-90
              transition ease-in-out duration-75
              py-1 px-2 rounded-full
              ${activeCategory === 'Todas' ? 'text-primary bg-blue-100' : 'text-gray-500'}
            `}
          >
            Todas
          </button>
        </li>
        {categories
          .sort((a, b) => a.order - b.order)
          .map((category, index) => {
          const isSelected = activeCategory === category.name;

          return (
            <li
              key={index}
              className={`
                lg:mb-2 group
              `}
            >
              <button
                data-category={category.name}
                onClick={updateCategory}
                className={`
                  ${uppercaseTextClasses}
                  group-hover:opacity-90
                  transition ease-in-out duration-75
                  py-1 px-2 rounded-full
                  ${isSelected ? 'text-primary bg-blue-100' : 'text-gray-500'}
                `}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}