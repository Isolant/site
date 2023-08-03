// Globals
import React, { useState } from "react";

// Components
import ServiceCard from '../../Cards/ServiceCard';
import TitlePackage from "../../TitlePackage";

// Classes
import { uppercaseTextClasses } from '../../../classes/Text';
import { horizontalPadding, verticalPadding } from '../../../classes/Spacing';

// SVGs
import { ReactComponent as ArrowIcon } from '../../../public/images/icons/two-arrows-down.svg';

export default function TechnicalService({
  title,
  text,
  services
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <React.Fragment>
      <section
        className={`${verticalPadding} bg-no-repeat bg-cover relative ${isExpanded === false ? 'overflow-y-hidden max-h-screen lg:max-h-full' : ''}`}
        style={{ backgroundImage: `url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)`}}
      >
        <div className={`${horizontalPadding} mx-auto container text-center text-white mb-4 sm:mb-8`}>
          <TitlePackage
            titleHierarchy="h6"
            title={title}
            text={text}
            additionalTextClasses="max-w-md mx-auto opacity-80"
            theme="dark"
          />
        </div>
        <ul
          className={`${horizontalPadding} pt-4 md:pt-8 lg:pt-12 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-x-4 gap-y-8 sm:gap-y-12`}
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
