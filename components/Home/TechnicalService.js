import React, { useState } from "react";

import ServiceCard from '../Cards/ServiceCard';
import TitlePackage from "../TitlePackage";

import { uppercaseTextClasses } from '../../classes/Text';
import { horizontalPadding, verticalPadding } from '../../classes/Spacing';

import { ReactComponent as ArrowIcon } from '../../public/images/icons/two-arrows-down.svg';

export default function TechnicalService({
  title,
  text,
  services
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <React.Fragment>
      <section
        className={`pt-12 sm:pt-16 md:pt-24 -mt-12 pb-24 bg-no-repeat bg-cover ${isExpanded === false ? 'overflow-y-hidden max-h-screen lg:max-h-full' : ''}`}
        style={{ backgroundImage: `url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)`}}
      >
        <div className={`${horizontalPadding} pt-12 mx-auto container text-center text-white mb-4 sm:mb-8`}>
          <TitlePackage
            titleHierarchy="h6"
            title={title}
            text={text}
            additionalTextClasses="max-w-md mx-auto opacity-80"
            theme="dark"
          />
        </div>
        <ul
          className={`${horizontalPadding} py-4 md:py-8 lg:py-12 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-x-4 gap-y-8 sm:gap-y-12`}
        >
          {services.map((service, index) => {
            return(
              <li
                key={index}
                className={index === 4 || index === 5 || index === 6 ? 'xl:col-span-4' : 'xl:col-span-3'}
              >
                <ServiceCard
                  service={service}
                />
              </li>
            )
          })}
        </ul>
      </section>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${uppercaseTextClasses} text-primary flex items-center bg-white p-4 rounded-full border border-gray-100 mx-auto relative -top-7 lg:hidden`}
      >
        <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180 text-primary fill-current' : ''} mr-4`} />
        {isExpanded === true ?
          "Menos servicios"
          :
          "Más servicios"
        }
        <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180 text-primary fill-current' : ''} ml-4`} />
      </button>
    </React.Fragment>
  )
}
