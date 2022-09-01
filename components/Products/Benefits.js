// Globals
import React from "react";
import { standardTextClasses } from "../../classes/Text";

// Components
import ThirdScreenSection from '../Layout/ThirdScreenSection';

export default function Benefits({ 
  image,
  patent,
  title,
  subtitle,
  text,
  link,
  logo,
  benefits,
}) {

  const button = [{
    text: "Comprar ahora",
    link,
    color: 'secondary',
    icon: false,
  }];

  let additionalContent;
  if(!benefits) {
    additionalContent = null;
  } else {
    additionalContent = `
      <div className="leading-normal text-sm sm:text-base tracking-wide mt-2 lg:mt-6">
        <h5
          className={${standardTextClasses} text-primary mb-1}
        >
          <strong>Adem&aacute;s:</strong>
        </h5>
        <ul className="list-disc pl-4">
          {benefits.map((benefit, index) => 
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: benefit.text}}
              className={${standardTextClasses} text-gray-500 font-light mb-1}
            />
          )}
        </ul>
      </div>
    `;
  }

  return (
    <ThirdScreenSection
      image={image}
      badge={patent}
      imagePosition="right"
      theme="light"
      subtitle={subtitle}
      title={title}
      text={text}
      Logo={() => <img src={logo} className="max-h-8 mb-2 sm:mb-4" />}
      buttons={button}
      additionalContent={
        !benefits ? null :
        <div className="leading-normal text-sm sm:text-base tracking-wide mt-2 lg:mt-6">
          <h5
            className={`${standardTextClasses} text-primary mb-1`}
          >
            {!text.includes('Súper TBA') &&
              <strong>Adem&aacute;s:</strong>
            }
          </h5>
          <ul className="list-disc pl-4">
            {benefits.map((benefit, index) => 
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: benefit.text}}
                className={`${standardTextClasses} text-gray-500 font-light mb-1`}
              />
            )}
          </ul>
        </div>
      }
    />
  )
}