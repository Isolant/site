import React from "react";

import TitlePackage from "../TitlePackage";
import ContactForm from './ContactForm';

import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

export default function About({ 
  image,
  title,
  text,
  textClasses,
}) {
  return (
    <section
      className={`
        ${verticalPadding} ${horizontalPadding}
      `}
    >
      <div className="mx-auto container px-4 relative">
        <img
          src={image}
          alt={title}
          className="mx-auto"
        />
        <TitlePackage
          titleHierarchy="h6"
          title={title}
          text={text}
          additionalTitleClasses="flex justify-center"
          additionalTextClasses={`
            text-center mx-auto
            ${textClasses}
          `}
          theme="light"
        />
      </div>
    </section>
  )
}