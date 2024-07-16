// Globals
import React from "react";
import Link from 'next/link';

// Classes
import { uppercaseTextClasses, smallTextClasses } from "../../classes/Text";
import ReactMarkdown from "react-markdown";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/aislantes/${product.id}`}
      className="bg-white rounded-md p-4 shadow-sm hover:shadow-lg block"
    >
      <li
        className="flex items-center"
      >
        <div className="flex-1">
          <h5
            className={`${uppercaseTextClasses} text-primary mb-2`}
          >
            {product.name}
          </h5>
          <div
            className={`${smallTextClasses} text-gray-500 line-clamp-5 sm:line-clamp-4`}
          >
            <ReactMarkdown>
              {product.description}
            </ReactMarkdown>
          </div>
        </div>
        <div className="ml-2">
          <img
            src={product.globals.productImage}
            alt={product.name}
            className={`${product.globals.productImageProportion === 'square' ? 'h-16' : 'h-28'} object-cover`}
          />
        </div>
      </li>
    </Link>
  )
}