import React from "react";

import { standardTextClasses } from "../../classes/Text";

import { ReactComponent as WarningIcon } from '../../public/images/icons/warning.svg';

const Recommendation = ({ recommendation }) => {
  return (
    <li
      className="flex items-center gap-4 text-left"
    >
      <div
        className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center p-4 mx-auto"
      >
        <WarningIcon />
      </div>
      <p
        className={`
          ${standardTextClasses}
          text-gray-500
          line-clamp-none md:line-clamp-3 lg:line-clamp-5
          max-w-xs md:max-w-none mx-auto
          flex-1
        `}
      >
        {recommendation.text}
      </p>
    </li>
  )
}

export default Recommendation;