// Globals
import React from "react";

// Component Imports
import FullScreenSection from "../../components/Layout/FullScreenSection";

// Styles
import FaqsStyles from './Thermography.module.css';

// Classes
import { verticalPadding } from "../../classes/Spacing";

// SVGs
import {ReactComponent as Dots} from '../../public/images/misc/dots.svg';
import {ReactComponent as Circle} from '../../public/images/misc/circle.svg';

export default function Faqs({ 
  image,
  title,
  text,
  buttons,
}) {

  return (
    <FullScreenSection
      image={image}
      imagePosition="left"
      title={title}
      text={text}
      theme="dark"
      layout="boxed"
      buttons={buttons}
      classes={`${FaqsStyles.Title} ${verticalPadding}`}
    >
        <Dots className="hidden lg:block absolute left-4 xl:left-16 -top-8 text-gray-100 fill-current z-10 transform rotate-90" />
        <Circle className="hidden lg:block absolute right-4 xl:right-16 -top-4 text-red-200 fill-current z-10" />
      </FullScreenSection>
  )
}