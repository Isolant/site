// Globals
import React from "react";

// Components
import HalfScreenSection from '../Layout/HalfScreenSection';
import EthicsForm from './EthicsForm';

// Styles
import TechnicalInformationStyles from './Philosophy.module.css';

export default function Ethics({
  title,
  text,
  image,
}) {
  return (
    <HalfScreenSection
      image={image}
      imagePosition="left"
      title={title}
      text={text}
      theme="light"
      classes={TechnicalInformationStyles.Title}
      id="etica-e-integridad"
      twoRowsLayout={true}
    >
      <EthicsForm />
    </HalfScreenSection>
  )
}