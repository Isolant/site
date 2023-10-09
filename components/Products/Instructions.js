import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ColorContrastChecker from 'color-contrast-checker';

import Button from "../Forms/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { standardTextClasses, uppercaseTextClasses, thinTitleClasses, boldSubtitleClasses } from "../../classes/Text";

import { getPixelColor } from '../../utils/getPixelColor';

export default function Instructions({ 
  product,
  instructions,
  pdf,
  backgroundImage,
  backgroundColor
}) {
  const [activeInstruction, setActiveInstruction] = useState(instructions[0]);
  const [fontColor, setFontColor] = useState('#FFFFFF');

  const settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const fetchPixelColor = async (imageUrl) => {
    const color = await getPixelColor(imageUrl, 0, 0);
    return color;
  }

  const updateFontColor = (color1, color2) => {
    const ccc = new ColorContrastChecker();
    const ratio = 5.7;
    
    // If contrast passes, do nothing
    if (ccc.isLevelCustom(color1, color2, ratio)) {
      return;
    } else {
      setFontColor("#231F20");
    }
  }

  // Get pixel color from the backgroundImage, and update the font color based on that
  useEffect(async () => {
    const color = await fetchPixelColor(backgroundImage || "/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg");
    updateFontColor(color, fontColor);
  }, []);

  return (
    <section
      className={`
        ${horizontalPadding} ${verticalPadding}
        bg-no-repeat bg-cover
      `}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : "url('/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg')"}}
    >
      <div className="mx-auto container">
        <div className="flex md:items-end justify-between flex-col md:flex-row">
          <h5
            className={`${thinTitleClasses} mb-2 md:mb-0`}
            style={{ color: fontColor }}
          >
            Instrucciones de colocaci&oacute;n
            <strong>de {product}</strong>
          </h5>
          {pdf &&
            <Button
              href={pdf}
              text="Descargar instrucciones en PDF"
              color="transparent"
              isExternal={true}
              icon={true}
              size="small"
            />
          }
        </div>
        {instructions.length > 1 &&
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
          >
            {instructions.map((instruction, index) => {
              return (
                <li
                  key={index}
                  className={`
                    ${instruction === activeInstruction ?
                      'border-white bg-white'
                      :
                      'border-gray-600'
                    }
                    p-4 group border hover:border-white transition duration-75 ease-in-out
                  `}
                >
                  <div
                    className={`
                      ${standardTextClasses}
                      ${instruction === activeInstruction ?
                        'text-gray-700'
                        :
                        'text-gray-300'
                      }
                      text-left cursor-pointer
                      grid justify-start h-full
                    `}
                    onClick={() => setActiveInstruction(instruction)}
                  >
                    <span>{instruction.title}</span>
                    <button
                      className={`
                        ${uppercaseTextClasses}
                        block
                        ${instruction === activeInstruction ?
                          'text-gray-700'
                          :
                          'text-gray-300'
                        }
                        mt-4 text-left self-end
                      `}
                      onClick={() => setActiveInstruction(instruction)}
                    >
                      Ver colocaci&oacute;n
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        }
        <div
          className="bg-gray-500 rounded p-4 md:p-8 my-8"
          style={{ backgroundColor: backgroundColor || ""}}
        >
          <Slider
            {...settings} 
          >
            {activeInstruction.steps
              .map((step, index) => {
                return(
                  <ul 
                    key={index}
                  >
                    <li
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
                    >
                      <div>
                        <img
                          src={step.stepImage}
                          alt={step.stepText}
                          className="w-full rounded-md"
                        />
                      </div>
                      <div
                        className="pr-4"
                      >
                        <h5
                          className={`
                            ${uppercaseTextClasses}
                            ${product === 'Atacama' ? "text-white" : "text-gray-400"}
                          `}
                        >
                          Paso {index + 1} de {activeInstruction.steps.length}
                        </h5>
                        <h6
                          className={`
                            ${boldSubtitleClasses} text-white my-2
                          `}
                        >
                          {step.stepTitle || activeInstruction.title}
                        </h6>
                        <p
                          className={`
                            ${standardTextClasses}
                            ${product === 'Atacama' ? "text-white" : "text-gray-300"}
                          `}
                        >
                          {step.stepText}
                        </p>
                      </div>
                    </li>
                  </ul>
                )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
