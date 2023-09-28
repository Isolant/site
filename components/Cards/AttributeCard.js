import React from "react";
import Image from 'next/image';

import { boldSubtitleClasses, standardTextClasses } from "../../classes/Text";

const AttributeCard = ({ attribute, color }) => {
  return (
    <li
      className="grid gap-3"
    >
      <div
        className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto"
      >
        <Image
          src={attribute.image}
          alt={attribute.title}
          width={42}
          height={42}
        />
      </div>
      <h4
        className={`
          ${boldSubtitleClasses}
          text-gray-700
          h-auto md:h-6 lg:h-16 xl:h-8
        `}
        style={{color: color && color}}
      >
        {attribute.title}
      </h4>
      <p
        className={`
          ${standardTextClasses}
          text-gray-500
          h-auto md:h-32
          max-w-xs md:max-w-none mx-auto
        `}
      >
        {attribute.text}
      </p>
    </li>
  )
}

export default AttributeCard;