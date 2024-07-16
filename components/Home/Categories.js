import React from "react";
import Link from "next/link";
import Image from "next/image";

import { verticalPadding } from "../../classes/Spacing";
import { boldSubtitleClasses, uppercaseTextClasses } from "../../classes/Text";

export default function Categories({ categories, title }) {
  return (
    <section className={`${verticalPadding} mx-auto container px-4 md:px-6 lg:px-8 xl:px-0`}>
      <h3
        className={`${boldSubtitleClasses} font-semibold text-gray-800 pb-4`}
      >
        {title}
      </h3>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-8">
        {categories
          .filter((category) => category.visible === true)
          .sort((a, b) => a.order > b.order ? 1 : -1)
          .map((category, index) => {
          return (
            <li
              key={index}
              className="bg-white p-4 md:p-12 drop-shadow-md hover:drop-shadow-xl transition duration-100 ease-in-out"
            >
              <Link
                href={`/productos?categoria=${category.id}`}
                className="flex items-center justify-center flex-col"
              >
                <Image
                  src={category.icon}
                  alt={category.title}
                  height={48}
                  width={48}
                />
                <p
                  className={`${uppercaseTextClasses} font-semibold text-gray-800 mt-4 text-center`}
                >
                  {category.title}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}