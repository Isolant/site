// Globals
import React, { useState } from "react";

// Components
import TitlePackage from "../TitlePackage";
import AgendaCard from "../Cards/AgendaCard";

// SVGs
import { ReactComponent as ArrowIcon } from '../../images/icons/two-arrows-down.svg';

// Classes
import { verticalPadding, horizontalPadding } from "../../classes/Spacing";
import { uppercaseTextClasses } from "../../classes/Text";

export default function Agenda({ 
  title,
  text,
  agenda
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className={`${verticalPadding} bg-no-repeat bg-cover relative ${isExpanded === false ? 'overflow-y-hidden max-h-screen lg:max-h-full' : ''}`}
      style={{ backgroundImage: `url(https://res.cloudinary.com/isolant-cloudinary/image/upload/f_auto,q_auto:good/website-2021/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)`}}
    >
      <div className={`${horizontalPadding} mx-auto container text-center text-white mb-4 sm:mb-8`}>
        <TitlePackage
          titleHierarchy="h3"
          title={title}
          text={text}
          additionalTextClasses="max-w-md mx-auto opacity-80"
          theme="dark"
        />
      </div>
      <ul
        className={`${horizontalPadding} pt-4 md:pt-8 lg:pt-12 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-y-12`}
      >
        {agenda.map((agendaItem, index) => 
          new Date(agendaItem.date) > new Date() ?
            <li
              key={index}
            >
              <AgendaCard
                agenda={agendaItem}
              />
            </li>
          : ''
        )}
      </ul>
      <div className="absolute w-full bottom-0 lg:hidden h-48 bg-gradient-to-t from-gray-900 flex items-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${uppercaseTextClasses} text-white flex items-center p-4 rounded-full border border-gray-100 mx-auto mb-6`}
          >
            <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} fill-current text-white mr-4`} />
            {isExpanded === true ?
              "Ver menos fechas"
              :
              "Ver más fechas"
            }
            <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} fill-current text-white ml-4`} />
          </button>
        </div>
    </section>
  )
}