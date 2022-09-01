// Globals
import React from "react";
import Link from 'next/link';

// Classes
import { uppercaseTextClasses, smallTextClasses } from "../../classes/Text";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/aislantes/${product.id}`}
    >
      <a
        className="bg-white rounded-md p-4 shadow-sm hover:shadow-lg"
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
            <p
              className={`${smallTextClasses} text-gray-500 line-clamp-5 sm:line-clamp-4`}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
          <div className="ml-2">
            <img
              src={product.productImage}
              alt={product.name}
              className="h-28 object-cover"
            />
          </div>
        </li>
      </a>
    </Link>
  )
}