// Globals
import React from "react";

// Classes
import { horizontalPadding } from "../../classes/Spacing";

// SVGs
import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';

export default function InsetCallout({
  children,
  decorations,
  gridClasses
}) {
  return (
    <section
      className={`${horizontalPadding} pt-8 sm:pt-24 container mx-auto relative top-0 md:-top-16 lg:-top-36 z-10 mb-8 md:mb-16 lg:-mb-16`}
    >
      <div className="p-4 lg:p-8 bg-white rounded-lg relative">
        {decorations && 
          <React.Fragment>
            <div className="hidden sm:block absolute">
              <Dots className="text-gray-500 fill-current transform rotate-180" />
            </div>
            <div className="hidden sm:block absolute right-4 lg:right-8">
              <Dots className="text-gray-500 fill-current transform -rotate-90" />
            </div>
          </React.Fragment>
        }
        <ul className={`${gridClasses}`}>
          {children}
        </ul>
      </div>
    </section>
  )
}