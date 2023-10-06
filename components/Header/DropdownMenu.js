// Globals
import React, { useState } from "react";
import slugify from "react-slugify";

// Components
import Tag from '../Tag';

// Classes
import { standardTextClasses, uppercaseTextClasses } from "../../classes/Text";

// Content
import { attributes } from "../../content/header.md";

// Icons
import { ReactComponent as ChevronIcon } from "../../public/images/icons/chevron-right.svg";

export default function DropdownMenu({ 
  productLines
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  let {
    servicesTitle,
    servicesLinks,
    companyTitle,
    companyLinks,
    productTags
  } = attributes;

  return (
    <div
      className={`top-20 fixed z-30 w-full px-4 sm:px-8`}
    >
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 bg-white p-4 sm:p-8 rounded-md overflow-y-scroll sm:overflow-y-auto overscroll-contain max-h-screen sm:max-h-auto pb-24"
      >
        <li>
          <DropdownHeading title="Aislantes para" />
          <ol>
            {productLines
              .sort((a, b) => a.order - b.order)
              .map((productLine, index) =>
              <React.Fragment key={index}>
                <DropdownItem
                  href={`/productos?linea=${productLine.id}`}
                  isExternal={false}
                  text={productLine.title}
                  icon={true}
                  onClickMethod={() => setIsExpanded(productLine.id)}
                  additionalTextClasses={`${isExpanded === productLine.id ? 'text-primary' : 'text-gray-600'}`}
                  additionalIconClasses={`${isExpanded === productLine.id ? 'rotate-90' : ''}`}
                />
                {isExpanded === productLine.id &&
                  <ol className="mt-2 px-4 max-h-64 overflow-y-auto">
                    {productLine.products && productLine.products.filter(product => product !== "Iso Siding").map((product, index) => 
                      <DropdownItem
                        key={index}
                        href={`/aislantes/${slugify(product)}`}
                        isExternal={false}
                        text={product}
                        icon={false}
                        additionalTextClasses="text-gray-600"
                        tags={productTags}
                      />
                    )}
                  </ol>
                }
              </React.Fragment>
            )}
          </ol>
        </li>
        <li>
          <DropdownHeading title={servicesTitle} />
          <ol>
            {servicesLinks
              .map((service, index) =>
              <DropdownItem
                href={service.link}
                key={index}
                isExternal={service.isExternal}
                text={service.text}
                icon={false}
                additionalTextClasses="text-gray-600"
              />
            )}
          </ol>
        </li>
        <li>
          <DropdownHeading title={companyTitle} />
          <ol>
            {companyLinks
              .map((company, index) =>
              <DropdownItem
                href={company.link}
                key={index}
                isExternal={company.isExternal}
                text={company.text}
                icon={false}
                additionalTextClasses="text-gray-600"
              />
            )}
          </ol>
        </li>
      </ul>
    </div>
  )
}

const DropdownHeading = ({ title }) => {
  return (
    <h3
      className={`${uppercaseTextClasses} text-gray-900 font-bold`}
    >
      {title}
    </h3>
  )
}

const DropdownItem = ({ isExternal, href, text, icon, onClickMethod, additionalTextClasses, additionalIconClasses, tags }) => {
  return (
    <li
      className="mt-2 flex items-center"
    >
      {isExternal === true ?
        <a
          className={`flex-1 ${standardTextClasses} ${additionalTextClasses && additionalTextClasses} hover:opacity-80`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      :
        <React.Fragment>
          <a
            className={`flex-1 ${standardTextClasses} ${additionalTextClasses && additionalTextClasses} hover:opacity-80`}
            href={href}
          >
            {text === 'Termoblock' ?
              'Crianza animal'
              :
              text
            }
          </a>
          {tags && tags.map((tag, index) => {
            return (
              tag.product === text &&
                <Tag
                  key={index}
                  text={tag.text}
                  color={tag.color}
                />
            )
          })}
        </React.Fragment>
      }
      {icon === true &&
        <ChevronIcon
          className={`fill-current text-gray-300 cursor-pointer transform ${additionalIconClasses}`}
          onClick={onClickMethod}
        />
      }
    </li>
  )
}