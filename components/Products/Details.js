import React from "react";
import ReactMarkdown from "react-markdown";

import { standardTextClasses } from "../../classes/Text";

import ThirdScreenSection from '../Layout/ThirdScreenSection';

export default function Details({ 
  image,
  text,
  link,
  logo,
  functions,
  applications,
  presentations,
  anchor,
  title
}) {

  const button = [{
    text: "Comprar ahora",
    link,
    color: 'secondary',
    icon: false,
  }];

  return (
    <ThirdScreenSection
      image={image}
      imagePosition="right"
      theme="light"
      text={text}
      Logo={() => <img src={logo} className={`${title === 'Atacama' ? 'max-h-24' : 'max-h-8'} mb-2 sm:mb-4`} />}
      buttons={button}
      anchor={anchor}
      additionalContent={
        <React.Fragment>
          <div className="leading-normal text-sm sm:text-base tracking-wide mt-2 lg:mt-6">
            <h5
              className={`${standardTextClasses} text-primary mb-1`}
            >
              <strong>Funci&oacute;n:</strong>
            </h5>
            <ul className="list-disc pl-4">
              {functions.map((functionText, index) => 
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: functionText.text}}
                  className={`${standardTextClasses} text-gray-500 font-light mb-1`}
                />
              )}
            </ul>
          </div>
          <div className="leading-normal text-sm sm:text-base tracking-wide mt-2 lg:mt-6">
            <h5
              className={`${standardTextClasses} text-primary mb-1`}
            >
              <strong>Aplicaci&oacute;n:</strong>
            </h5>
            <ul className="list-disc pl-4">
              {applications.map((application, index) => 
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: application.text}}
                  className={`${standardTextClasses} text-gray-500 font-light mb-1`}
                />
              )}
            </ul>
          </div>
          <div className="leading-normal text-sm sm:text-base tracking-wide mt-2 lg:mt-6">
            <h5
              className={`${standardTextClasses} text-primary mb-1`}
            >
              <strong>Presentaci&oacute;n:</strong>
            </h5>
            <ul className="list-disc pl-4">
              {presentations.map((presentation, index) => 
                <li
                  key={index}
                  className={`${standardTextClasses} text-gray-500 font-light mb-1`}
                >
                  <ReactMarkdown>{presentation.text}</ReactMarkdown>
                </li>
              )}
            </ul>
          </div>
        </React.Fragment>
      }
    />
  )
}