// Globals
import React from "react";

// SVGs
import { ReactComponent as ClockIcon } from '../../public/images/icons/clock.svg';
import { ReactComponent as LocationIcon } from '../../public/images/icons/location.svg';
import { ReactComponent as ArrowRightIcon } from '../../public/images/icons/short-arrow-right.svg';

// Classes
import { uppercaseTextClasses, boldTitleClasses, smallTextClasses } from "../../classes/Text";

export default function AgendaCard({ agenda }) {
  const parsedDate = new Date(agenda.date);
  const day = agenda.date.substr(8, 2);
  const month = parsedDate.getUTCMonth() + 1;
  const year = parsedDate.getFullYear();
  const startTimeHours = new Date(agenda.startTime).getHours();
  const startTimeMinutes = new Date(agenda.startTime).getMinutes();
  const endTimeHours = new Date(agenda.endTime).getHours();
  const endTimeMinutes = new Date(agenda.endTime).getMinutes();

  return (
    <a
      className="bg-white rounded-md p-4 shadow-sm hover:shadow-lg flex items-center group"
      href={agenda.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mr-4 border-r border-gray-100 pr-4 text-center">
        <p className={`${uppercaseTextClasses} text-gray-500`}>
          {
            month === 1 ? 'ENE' :
            month === 2 ? 'FEB' :
            month === 3 ? 'MAR' :
            month === 4 ? 'ABR' :
            month === 5 ? 'MAY' :
            month === 6 ? 'JUN' :
            month === 7 ? 'JUL' :
            month === 8 ? 'AGO' :
            month === 9 ? 'SEP' :
            month === 10 ? 'OCT' :
            month === 11 ? 'NOV' :
            'DEC'
          }
        </p>
        <h4
          className={`${boldTitleClasses} my-1 text-primary`}
        >
          {day}
        </h4>
        <p className={`${uppercaseTextClasses} text-gray-500`}>{year}</p>
      </div>
      <div className="flex-1">
        <h5
          className={`${uppercaseTextClasses} text-gray-900 mb-2`}
        >
          {agenda.title}
        </h5>
        <ul className="mb-2">
          <li className={`${smallTextClasses} flex items-center text-gray-500`}>
            <LocationIcon
              className="fill-current text-gray-700 opacity-60 mr-2"
            />
            {agenda.location}
          </li>
          <li className={`${smallTextClasses} flex items-center text-gray-500`}>
            <ClockIcon
              className="fill-current text-gray-700 opacity-60 mr-2"
            />
            {startTimeHours}:{startTimeMinutes === 0 ? '00' : startTimeMinutes} - {endTimeHours}:{endTimeMinutes === 0 ? '00' : endTimeMinutes}
          </li>
        </ul>
        <a
          href={agenda.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${uppercaseTextClasses} text-primary flex items-center group-hover:opacity-80`}
        >
          Inscripci&oacute;n
          <ArrowRightIcon
            className="ml-1 text-primary fill-current"
          />
        </a>
      </div>
    </a>
  )
}