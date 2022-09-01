// Globals
import React from "react";

// Component Imports
import HalfScreenSection from "../../components/Layout/HalfScreenSection";

// Styles
import ThermographyStyles from './Thermography.module.css';

export default function Thermography({ 
  image,
  title,
  text,
  buttons,
}) {

  return (
  <HalfScreenSection
      image={image}
      imagePosition="right"
      title={title}
      text={text}
      theme="light"
      height="full"
      buttons={buttons}
      classes={ThermographyStyles.Title}
    />
  )
}