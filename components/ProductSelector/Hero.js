// Globals
import React from "react";
import Link from 'next/link';

// Classes
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { boldSubtitleClasses, standardTextClasses, uppercaseTextClasses } from "../../classes/Text";

export default function ResultHero({ background, title, cta, result }) {
  return (
    <section
      className={`h-auto bg-no-repeat bg-cover ${verticalPadding}`}
      style={{ backgroundImage: `url(${background})`}}
    >
      <div className={`${horizontalPadding} container mx-auto pt-12`}>
        <h1
          className={`${boldSubtitleClasses} text-white`}
        >
          {title}
        </h1>
        <ul 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 sm:mt-6">
            <li>
              <h2
                className={`${uppercaseTextClasses} text-white opacity-60`}
              >
                Necesito aislar
              </h2>
              <p
                className={`${standardTextClasses} text-white mt-1`}
              >
                {result && result.type}
              </p>
            </li>
            <li>
              <h2
                className={`${uppercaseTextClasses} text-white opacity-60`}
              >
                De mi
              </h2>
              <p
                className={`${standardTextClasses} text-white mt-1`}
              >
                {result && result.category}
              </p>
            </li>
            <li>
              <h2
                className={`${uppercaseTextClasses} text-white opacity-60`}
              >
                Cantidad de m2
              </h2>
              <p
                className={`${standardTextClasses} text-white mt-1 capitalize`}
              >
                {
                  result &&
                  result.m2
                    .replaceAll('-', ' ')
                }
              </p>
            </li>
            <li>
              <h2
                className={`${uppercaseTextClasses} text-white opacity-60`}
              >
                Tipolog&iacute;a constructiva
              </h2>
              <p
                className={`${standardTextClasses} text-white mt-1 truncate overflow-ellipsis capitalize`}
              >
                {
                  result &&
                  result.typology
                    .replace('canos', 'caños')
                    .replaceAll('-', ' ')
                }
              </p>
            </li>
            <li className="self-end">
              <Link
                href={'/'}
              >
                <a
                  className={`${uppercaseTextClasses} text-white hover:opacity-80`}
                >
                  {cta}
                </a>
              </Link>
            </li>
        </ul>
      </div>
    </section>
  )
}