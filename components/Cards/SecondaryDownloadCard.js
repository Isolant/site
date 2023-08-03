// Globals
import React from "react";

// Classes
import { smallTextClasses, uppercaseTextClasses } from "../../classes/Text";

// SVGs
import { ReactComponent as ShortArrowRightIcon } from '../../public/images/icons/short-arrow-right.svg';
import { ReactComponent as ShortArrowDownIcon } from '../../public/images/icons/short-arrow-down.svg';

export default function SecondaryDownloadCard({ download, classes }) {
  return (
    <div
      className={`${classes !== undefined ? classes : ''} relative block bg-white p-4 rounded-md shadow-sm`}
    >
      <h3
        className={`${uppercaseTextClasses} text-gray-900 sm:h-12`}
      >
        {download.title}
      </h3>
      <p
        className={`${smallTextClasses} text-white text-gray-400`}
      >
        {download.format}
      </p>
      <ul className="flex items-center mt-2">
        {download.pdf &&
          <li className="mr-4">
            <a
              href={download.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`${uppercaseTextClasses} text-gray-600 font-bold hover:opacity-90 flex items-center`}
            >
              Ver
              <ShortArrowRightIcon className="ml-1 fill-current text-gray-600" />
            </a>
          </li>
        }
        {download.zip &&
          <React.Fragment>
            <li>
              <a
                href={download.zip}
                target="_blank"
                rel="noopener noreferrer"
                className={`${uppercaseTextClasses} text-primary font-bold hover:opacity-90 flex items-center`}
              >
                Descargar
                <ShortArrowDownIcon className="ml-1 fill-current text-primary" />
              </a>
            </li>
          </React.Fragment>
        }
      </ul>
    </div>
  )
}