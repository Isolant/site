// Globals
import React from "react";

// Component Imports
import HalfScreenSection from "../../components/Layout/HalfScreenSection";

// SVGs
import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';

export default function Calculator({ 
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
  >
    <Dots
      className="text-gray-500 fill-current transform -rotate-90 absolute top-4 right-4 hidden lg:block z-10"
    />
  </HalfScreenSection>
  )
}