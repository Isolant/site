// Globals
import React from "react";

// Styles
import ContactInformationStyles from './ContactInformation.module.css';

// Classes
import { horizontalPadding } from "../../classes/Spacing";
import { standardTextClasses, uppercaseTextClasses } from "../../classes/Text";

export default function ContactInformation({ 
  information
 }) {

  return (
    <ul className={`${horizontalPadding} grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 container mx-auto pt-8 sm:pt-0 pb-8 sm:pb-16 lg:pb-24`}>
      {information.map((content, index) => {
        return(
          <li
            key={index}
          >
            <h3
              className={`${uppercaseTextClasses} text-gray-500 mb-2`}
            >
              {content.title}
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: content.text }}
              className={`${standardTextClasses} text-gray-800 ${ContactInformationStyles.TextContent}`}
            />
          </li>
        )
      })}
    </ul>
  )
}