import React from "react";
import Link from 'next/link';

import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';

import { uppercaseTextClasses } from "../../classes/Text";

export default function ProductLineCard({ productLine, classes }) {
  return (
    <Link
      href={`/productos?linea=${productLine.id}`}
    >
      <a
        className={`${classes !== undefined ? classes : ''} relative block group`}
      >
        <div
          className="absolute left-0 top-0 w-2 h-full rounded-tl-lg rounded-bl-lg z-20"
          style={{ background: `${productLine.color}` }}
        />
        <div
          style={{ backgroundImage: `url(${productLine.mainImage})`}}
          className="rounded-t-lg rounded-b-xl h-48 sm:h-56 bg-no-repeat bg-contain bg-top relative z-10"
        >
          <h4
            className={`bg-white ${uppercaseTextClasses} p-3 pl-5 sm:p-4 sm:pl-6 text-gray-800 group-hover:text-gray-600 absolute w-full bottom-0 rounded-b-lg font-semibold`}
          >
            {productLine.title}
          </h4>
        </div>
        <Dots
          className="hidden lg:block absolute -right-8 -top-0 transform -rotate-90 text-gray-600 fill-current"
        />
      </a>
    </Link>
  )
}