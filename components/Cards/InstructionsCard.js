import React from "react";

import { smallTextClasses, uppercaseTextClasses } from "../../classes/Text";

export default function InstructionsCard({
  numberActive,
  image,
  title,
  text,
  index
}) {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-t-md"
        />
        {numberActive &&
          <span
            className={`
              absolute left-0 bottom-0
              px-4 py-3
              bg-gray-400 text-white
              font-semibold
              ${uppercaseTextClasses}
            `}
          >
            {index + 1}
          </span>
        }
      </div>
      {title &&
        <h5
          className={`
            ${uppercaseTextClasses}
            font-semibold
            text-gray-800
            mt-2
          `}
        >
          {title}
        </h5>
      }
      {text &&
        <p
          className={`
            ${smallTextClasses}
            mt-2 text-gray-600
            h-24
          `}
        >
          {text}
        </p>
      }
    </div>
  )
}