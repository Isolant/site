// Globals
import React from "react";

// Components
import HalfScreenSection from "../../Layout/HalfScreenSection";

// SVGs
import { ReactComponent as Dots } from '../../../public/images/misc/dots.svg';
import { ReactComponent as Circle } from '../../../public/images/misc/circle.svg';

export default function Isoplus({
  title,
  text,
  image,
  link
}) {
  const button = [{
    text: link,
    link: 'https://isoplus.isolant.com.ar',
    color: 'primary',
    icon: true,
  }];

  return (
    <HalfScreenSection
      image={image}
      imagePosition="left"
      title={title}
      text={text}
      buttons={button}
      theme="light"
      height="auto"
      Logo={
        () => <img
          className="max-h-12 mb-2 sm:mb-4"
          alt="Isoplus"
          src="/images/professionals/homepage/isolant-aislantes-logo-isoplus.png"
          srcSet="/images/professionals/homepage/isolant-aislantes-logo-isoplus.png 1x, /images/professionals/homepage/isolant-aislantes-logo-isoplus_2x.png 2x"
        />
      }
    >
      <Dots className="hidden lg:block absolute left-4 xl:left-16 bottom-4 xl:-bottom-8 text-gray-100 fill-current z-10 transform rotate-90" />
      <Circle className="hidden sm:block absolute right-4 xl:right-16 -bottom-8 text-red-100 fill-current z-10" />
    </HalfScreenSection>
  )
}
