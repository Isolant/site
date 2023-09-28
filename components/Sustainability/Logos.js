import React from "react";
import Image from 'next/image';

import { horizontalPadding, verticalPadding } from '../../classes/Spacing';
import { boldSubtitleClasses } from "../../classes/Text";

export default function Logos({
  title,
  logos,
}) {

  return (
      <section
        className={`${verticalPadding} bg-no-repeat bg-cover relative`}
      >
        <div className={`${horizontalPadding} mx-auto container mb-4 md:mb-0`}>
          {title &&
            <h6 className={`${boldSubtitleClasses} text-white`}>{title}</h6>
          }
        </div>
        <ul
          className={`${horizontalPadding} pt-4 md:pt-8 lg:pt-12 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4`}
        >
          {logos.map((logo, index) => {
            return(
              <li
                key={index}
                className="relative w-full h-16"
              >
                <a
                  href={logo.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:opacity-80 transition ease-in-out duration-100"
                >
                  <Image
                    layout="fill"
                    src={logo.image}
                    alt={logo.title}
                    className="w-full h-full object-contain"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </section>
  )
}
