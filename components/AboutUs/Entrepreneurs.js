// Globals
import React from "react";

// Components
import HalfScreenSection from '../Layout/HalfScreenSection';

// Styles
import EntrepreneursStyles from './Entrepreneurs.module.css';

export default function Entrepreneurs({
  title,
  text,
  image,
  ctaText,
  ctaLink,
}) {
  const button = [{
    link: ctaLink,
    text: ctaText,
    isExternal: false,
    icon: false,
    color: 'primary'
  }]
  return (
    <React.Fragment>
      <HalfScreenSection
        image={image}
        imagePosition="left"
        title={title}
        text={text}
        theme="light"
        buttons={button}
        classes={EntrepreneursStyles.Container}
        id="emprendedores"
      />
    </React.Fragment>
  )
}