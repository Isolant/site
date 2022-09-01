// Globals
import React from "react";

// Components
import FullScreenSection from '../Layout/FullScreenSection';

// Styles
import PatentStyles from './Patents.module.css';

export default function Patents({
  title,
  text,
  image,
  background,
  ctaLink,
  ctaText
}) {
  
  const button = [{
    link: ctaLink,
    text: ctaText,
    color: 'secondary',
    isExternal: true,
    icon: false,
  }];

  return (
    <FullScreenSection
      background={background}
      image={image}
      title={title}
      text={text}
      theme="dark"
      height="auto"
      layout="center"
      classes={`${PatentStyles.Container} ${PatentStyles.ImageContainer}`}
      buttons={button}
      id="innovacion-calidad"
    />
  )
}