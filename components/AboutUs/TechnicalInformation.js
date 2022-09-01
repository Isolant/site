// Globals
import React from "react";

// Components
import HalfScreenSection from '../Layout/HalfScreenSection';
// import TechnicalInformationForm from './TechnicalInformationForm';

// Styles
import TechnicalInformationStyles from './Philosophy.module.css';

export default function TechnicalInformation({
  title,
  text,
  image,
  ctaText,
  ctaLink,
  products,
  formTitle,
  formText
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
        imagePosition="right"
        title={title}
        text={text}
        theme="light"
        buttons={button}
        classes={TechnicalInformationStyles.Title}
        id="ensayos"
      />
      {/* <TechnicalInformationForm
        products={products}
        title={formTitle}
        text={formText}
      /> */}
    </React.Fragment>
  )
}