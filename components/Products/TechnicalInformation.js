// Globals
import React, { useState } from "react";

// Components
import Product from '../Product';
import Button from '../Forms/Button';

// Styles
import TechnicalInformationStyles from './TechnicalInformation.module.css';

// Classes
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { standardTextClasses, uppercaseTextClasses, thinTitleClasses } from "../../classes/Text";

// SVGs
import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';
import { ReactComponent as Circle } from '../../public/images/misc/circle.svg';
import { ReactComponent as BigCircle } from '../../public/images/misc/big-circle.svg';

// Icons
import { ReactComponent as CheckIcon } from '../../public/images/icons/check.svg';

export default function TechnicalInformation({ 
  product,
  productImage,
  technicalInformation,
  generalInformation
}) {

  const [activeInformation, setActiveInformation] = useState(`${technicalInformation ? 'technical' : 'general'}`);

  return (
    <section
      className={`${horizontalPadding} ${verticalPadding} relative`}
    >
      <ul className="mx-auto container grid lg:grid-cols-6 gap-8">
        <li className="max-w-xs lg:col-span-2 relative self-start">
          <Product
            product={productImage}
            name={product}
            classes={`${TechnicalInformationStyles.Product} mx-auto py-8`}
            decorations={false}
          />
          <Dots
            className="text-gray-500 fill-current absolute top-0 left-0 transform rotate-180 z-10"
          />
          <Circle
            className="text-gray-500 fill-current absolute top-0 right-0 transform -rotate-90 z-10"
          />
          <BigCircle
            className="text-blue-100 fill-current absolute bottom-0 xl:inset-x-8"
          />
        </li>
        <li className="lg:col-span-4">
          <h5
            className={`${thinTitleClasses} text-gray-900`}
          >
            Especificaciones
            <strong>de {product}</strong>
          </h5>
          <ol className="flex my-8">
            {technicalInformation &&
              <li className="mr-4">
                <Button
                  text="Técnicas"
                  color="transparent"
                  isFormBtn={true}
                  classes={`
                    ${activeInformation === 'technical' ? 
                      'border-gray-600 text-gray-900 hover:opacity-60'
                        :
                      'border-gray-200 text-gray-400 hover:opacity-80'
                    }
                  `}
                  action={() => setActiveInformation('technical')}
                />
              </li>
            }
            {generalInformation &&
              <li>
                <Button
                  text="Generales"
                  color="transparent"
                  isFormBtn={true}
                  classes={`
                    ${activeInformation === 'general' ? 
                      'border-gray-600 text-gray-900 hover:opacity-60'
                        :
                      'border-gray-200 text-gray-400 hover:opacity-80'
                    }
                  `}
                  action={() => setActiveInformation('general')}
                />
              </li>
            }
          </ol>
          <ol className="grid lg:grid-cols-2">
            {
              technicalInformation && activeInformation === 'technical' ?
                technicalInformation.map((information, index) => {
                  return (
                    <li
                      key={index}
                      className="mb-4 lg:mb-8"
                    >
                      <h5
                        className={`${uppercaseTextClasses} text-gray-500 mb-1`}
                      >
                        {information.title}
                      </h5>
                      <p
                        className={`${standardTextClasses} text-gray-700`}
                      >
                        {information.text}
                      </p>
                    </li>
                  )
                })
              :
                generalInformation && generalInformation.map((information, index) => {
                  return (
                    <li
                      key={index}
                      className="mb-4 col-span-2"
                    >
                      <h5
                        className={`${standardTextClasses} text-gray-700 flex items-center`}
                      >
                        <CheckIcon
                          className="fill-current text-primary mr-2"
                        />
                        <span className="flex-1">
                          {information.title}
                        </span>
                      </h5>
                    </li>
                  )
                })
            }
          </ol>
        </li>
      </ul>
      <Dots className="hidden lg:block absolute left-4 xl:left-16 bottom-4 xl:-bottom-8 text-gray-400 fill-current z-10 transform rotate-90" />
      <Circle className="hidden lg:block absolute right-4 xl:right-16 -bottom-8 text-red-200 fill-current z-10" />
    </section>
  )
}