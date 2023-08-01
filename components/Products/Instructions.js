// Globals
import React, { useState } from "react";
import Slider from "react-slick";

// Components
import Button from "../Forms/Button";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Classes
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { standardTextClasses, uppercaseTextClasses, thinTitleClasses, boldSubtitleClasses } from "../../classes/Text";

export default function Instructions({ 
  product,
  instructions,
  pdf
}) {
  const [activeInstruction, setActiveInstruction] = useState(instructions[0]);

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

  return (
    <section
      className={`
        ${horizontalPadding} ${verticalPadding}
        bg-no-repeat bg-cover
      `}
      style={{ backgroundImage: `url('/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg')`}}
    >
      <div className="mx-auto container">
        <div className="flex md:items-end justify-between flex-col md:flex-row">
          <h5
            className={`${thinTitleClasses} text-white mb-2 md:mb-0`}
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
        <div className="bg-gray-500 rounded p-4 md:p-8 my-8">
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
                            text-gray-400
                          `}
                        >
                          Paso {index + 1} de {activeInstruction.steps.length}
                        </h5>
                        <h6
                          className={`
                            ${boldSubtitleClasses} text-white my-2
                          `}
                        >
                          {activeInstruction.title}
                        </h6>
                        <p
                          className={`
                            ${standardTextClasses} text-gray-300
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
