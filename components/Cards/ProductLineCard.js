// Globals
import React from "react";
import Link from 'next/link';

// Components
import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';

// Classes
import { standardTextClasses } from "../../classes/Text";

export default function ProductLineCard({ productLine, classes }) {
  return (
    <Link
      href={`/lineas-de-producto/${productLine.id}`}
    >
      <a
        className={`${classes !== undefined ? classes : ''} relative block`}
      >
        <div
          style={{ backgroundImage: `url(${productLine.mainImage})`}}
          className="rounded-md h-48 sm:h-60 bg-no-repeat bg-cover relative hover:opacity-80 z-10"
        >
          <h4
            className={`bg-gray-900 opacity-90 ${standardTextClasses} p-2 sm:p-4 text-white absolute w-full bottom-0 rounded-b-md`}
          >
            {productLine.title}
          </h4>
        </div>
        <Dots
          className="hidden lg:block absolute -right-8 top-0 transform -rotate-90 text-gray-600 fill-current"
        />
      </a>
    </Link>
  )
}