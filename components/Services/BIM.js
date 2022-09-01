// Globals
import React from "react";

// Component Imports
import HalfScreenSection from "../../components/Layout/HalfScreenSection";

// Styles
import BIMStyles from './Thermography.module.css';

export default function BIM({ 
  image,
  title,
  text,
  buttons,
}) {

  return (
  <HalfScreenSection
      image={image}
      imagePosition="left"
      title={title}
      text={text}
      theme="light"
      height="full"
      buttons={buttons}
      classes={BIMStyles.Title}
      id="bim"
    />
  )
}