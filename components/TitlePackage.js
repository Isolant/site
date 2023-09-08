import React from "react";
import ReactMarkdown from "react-markdown";

import Button from './Forms/Button';

import { thinTitleClasses, standardTextClasses } from "../classes/Text";

export default function TitlePackage({ 
  titleHierarchy,
  title,
  additionalTitleClasses,
  text,
  additionalTextClasses,
  theme,
  buttons,
  additionalButtonClasses,
  additionalContent,
  usesMarkdown
 }) {

  const titleClasses = `${thinTitleClasses} ${theme === 'dark' ? 'text-white' : 'text-gray-800'} ${additionalTitleClasses}`
  const textClasses = `${standardTextClasses} ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} ${additionalTextClasses} mt-2 lg:mt-6`

  const HeadingTag = `${titleHierarchy}`;
  

  return (
    <React.Fragment>
      {usesMarkdown === true ?
        <HeadingTag
          className={titleClasses}
        >
          <ReactMarkdown>{title}</ReactMarkdown>
        </HeadingTag>
      :
        <HeadingTag
          className={titleClasses}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      }
      {text &&
        <p
          className={textClasses}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      }
      {additionalContent && additionalContent}
      {buttons &&
        <div className={"flex flex-col lg:flex-row mt-4 sm:mt-8"}>
          {buttons.map((button, index) => {
            return(
              <Button
                key={index}
                href={button.link}
                text={button.text}
                color={button.color}
                isExternal={button.isExternal}
                isFormBtn={button.isFormBtn}
                action={button.action}
                icon={button.icon}
                classes={`
                  ${
                    buttons.length > 1 ?
                    'mb-4 lg:mb-0 lg:mr-4' : ''
                  }
                  ${additionalButtonClasses}
                `}
              />
            )
          })}
        </div>
      }
    </React.Fragment>
  )
}