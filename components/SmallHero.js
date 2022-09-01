// Globals
import React from "react";

// Styles
import HeroStyles from './Hero.module.css';

// Classes
import { horizontalPadding } from "../classes/Spacing";
import { thinTitleClasses } from "../classes/Text";

export default function SmallHero({ 
  image,
  title,
  theme
}) {

  return (
    <section
      className={`${HeroStyles.Container} relative lg:flex lg:items-center lg:flex-row`}
    >
      <div
        className="bg-gray-800 w-full h-full overflow-hidden absolute lg:relative 2xl:max-h-screen"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className={`${horizontalPadding} relative container lg:absolute z-10 py-24 sm:py-32 lg:py-0`}>
        <h1
          dangerouslySetInnerHTML={{ __html: title}}
          className={`${thinTitleClasses} ${theme === 'dark' ? 'text-white' : 'text-gray-800'} ${HeroStyles.SmallHeroTitle}`}
        />
      </div>
    </section>
  )
}