import React from "react";

import Button from '../Forms/Button';

import { boldTitleClasses, standardTextClasses } from "../../classes/Text";

export default function SubProducts({ 
  products,
  isSiding,
  color
}) {
  const titleClasses = isSiding ? "relative left-2 md:left-4 font-condensed text-5xl md:text-[60px] xl:text-[90px] tracking-[10px] md:tracking-[30px] xl:tracking-[40px]" : boldTitleClasses;
  return (
    <section>
      <ul className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Separator if more than one subproduct */}
        {products.length > 1 &&
          <div
            className="absolute h-full w-2 left-1/2 bg-gray-800 z-10 hidden lg:block"
            style={{ backgroundColor: color ? color : ''}}
          />
        }
        {products.map((product, index) => {
          return (
            <li
              key={index}
              className="relative overflow-hidden"
            >
              <a>
                <div className="absolute w-full h-full bg-gray-800 bg-opacity-40 z-10" />
                <img
                  className="aspect-square"
                  src={product.globals.productImage}
                  alt={product.name}
                />
                <div className="absolute w-full h-full flex gap-2 flex-col items-center justify-center z-20 top-0 text-center">
                  <h5
                    className={`
                      ${titleClasses} text-white
                    `}
                  >
                    {product.name}
                  </h5>
                  <p
                    className={`${standardTextClasses} text-white max-w-sm`}
                  >
                    {product.description}
                  </p>
                  <Button
                    text="Ver ficha de producto"
                    color={'transparent'}
                    isFormBtn={false}
                    href={`/aislantes/iso-siding/${product.id}`}
                    icon={true}
                  />
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}