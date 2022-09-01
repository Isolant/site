// Globals
import React from "react";

// Components
import AlternativeProductCard from '../Cards/AlternativeProductCard';

// Classes
import { horizontalPadding } from "../../classes/Spacing";
import { boldSubtitleClasses } from "../../classes/Text";

export default function AlternativeProducts({ title, products }) {
  return (
    <section
      className={`${horizontalPadding} pt-8 sm:pt-0 pb-8 lg:pb-24 container mx-auto`}
    >
      <h4
        className={`${boldSubtitleClasses} text-gray-900 mb-4`}
      >
        {title}
      </h4>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {products.map((product, index) => {
          return (
            product[0] !== undefined &&
              <AlternativeProductCard
                product={product[0]}
                key={index}
              />
          )
        })}
      </ul>
    </section>
  )
}