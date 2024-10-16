import React, { useState } from "react";

import TitlePackage from "../TitlePackage";
import DownloadCard from '../Cards/DownloadCard';
import SecondaryDownloadCard from '../Cards/SecondaryDownloadCard';

import { uppercaseTextClasses } from '../../classes/Text';
import { horizontalPadding, verticalPadding } from '../../classes/Spacing';

import { ReactComponent as ArrowIcon } from '../../public/images/icons/two-arrows-down.svg';

export default function Downloads({
  title,
  text,
  downloads,
  background,
  noBackground,
  shouldExpand,
  cardType
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <section
        className={`${noBackground === true ? 'pt-12 sm:pt-16 md:pt-24' : verticalPadding} bg-no-repeat bg-cover relative ${isExpanded === false ? 'overflow-y-hidden max-h-screen lg:max-h-full' : ''}`}
        style={{ backgroundImage: `${noBackground === true ? '' : background ? `url(${background})` : 'url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)'}`}}
      >
        <div className={`${horizontalPadding} mx-auto container text-center text-white mb-4 sm:mb-8`}>
          <TitlePackage
            titleHierarchy="h6"
            title={title}
            text={text}
            additionalTitleClasses="flex justify-center"
            additionalTextClasses="max-w-sm mx-auto"
            theme="dark"
          />
        </div>
        <ul
          className={`${horizontalPadding} pt-4 md:pt-8 lg:pt-12 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-12`}
        >
          {downloads.map((download, index) => {
            return(
              <li
                key={index}
              >
                {cardType === 'secondary' ?
                  <SecondaryDownloadCard
                    download={download}
                  />
                :
                  <DownloadCard
                    download={download}
                  />
                }
              </li>
            )
          })}
        </ul>
        {shouldExpand !== false &&
          <div className="absolute w-full bottom-0 lg:hidden h-48 bg-gradient-to-t from-gray-900 flex items-end">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`${uppercaseTextClasses} text-white flex items-center p-4 rounded-full border border-gray-100 mx-auto mb-6`}
            >
              <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} fill-current text-white mr-4`} />
              {isExpanded === true ?
                "Menos descargas"
                :
                "Más descargas"
              }
              <ArrowIcon className={`${isExpanded === true ? 'transform rotate-180' : ''} fill-current text-white ml-4`} />
            </button>
          </div>
        }
      </section>
  )
}
