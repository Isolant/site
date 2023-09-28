import React from "react";
import Image from 'next/image';

import TitlePackage from "../TitlePackage";

import { horizontalPadding, verticalPadding } from '../../classes/Spacing';

export default function ODS({
  title,
  logo,
  ods
}) {

  return (
      <section
        className={`${verticalPadding} bg-no-repeat bg-cover relative`}
        style={{ backgroundImage: `url(/images/bg/sustainability.jpg)`}}
        id="ods"
      >
        <div className={`${horizontalPadding} mx-auto container text-center text-white`}>
          {logo &&
            logo
          }
          {title &&
            <TitlePackage
              titleHierarchy="h6"
              title={title}
              additionalTitleClasses="flex justify-center"
              theme="dark"
            />
          }
        </div>
        <ul
          className={`${horizontalPadding} pt-4 md:pt-8 lg:pt-12 mx-auto container grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center`}
        >
          {ods.map((ods, index) => {
            return(
              <li
                key={index}
              >
                <Image
                  width={150}
                  height={150}
                  src={`/images/sustainability/ods/${ods.number}.png`}
                  alt={ods.title}
                />
              </li>
            )
          })}
        </ul>
      </section>
  )
}
