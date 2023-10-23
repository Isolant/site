// Globals
import React from "react";

// Components
import Button from "../Forms/Button";

// Classes
import { boldSubtitleClasses, smallTextClasses } from "../../classes/Text";

export default function ProductCard({ product, classes }) {
  return (
    <li
      className={`
        ${classes}
        bg-white
        border-gray-200
        rounded-md border hover:shadow-md transition duration-100 ease-in-out
      `}
    >
        <div
          className="block p-4 flex flex-col sm:flex-row items-start sm:items-center"
        >
          <img
            src={product.productImage}
            alt={product.title}
            className={`
              ${product.productImageProportion === 'square' ? 'max-h-12' : 'max-h-24'}
              mb-4 sm:mb-0
            `}
          />
          <div
            className="sm:ml-4"
          >
            <h5
              className={`
                ${boldSubtitleClasses}
                text-gray-700
              `}
            >
              {product.name}
            </h5>
            <p
              dangerouslySetInnerHTML={{__html: product.description}}
              className={`
                ${smallTextClasses}
                text-gray-500
                line-clamp-3
              `}
            />
            <Button
              text="Más información"
              color={'primary'}
              href={`/aislantes/${product.id}`}
              size="small"
              classes="mt-4"
            />
          </div>
        </div>
    </li>
  )
}