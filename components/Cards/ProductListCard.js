import React from "react";
import Link from 'next/link';

import { uppercaseTextClasses, smallTextClasses } from "../../classes/Text";

import styles from './ProductListCard.module.css';

export default function ProductListCard({ product }) {
  return (
    <li
      className="bg-white rounded-md p-4 shadow-sm"
    >
      <div
        className="flex"
      >
        <div className="flex-1">
          <h5
            className={`${uppercaseTextClasses} text-gray-800 tracking-wider font-semibold mb-2`}
          >
            {product.name}
          </h5>
          <p
            className={`${smallTextClasses} ${styles.Text} text-gray-500 line-clamp-3`}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <div className="flex flex-col gap-1 mt-2">
            {product.ecommerceLink &&
              <a
                href={product.ecommerceLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${uppercaseTextClasses} text-secondary hover:opacity-80 transition ease-in-out duration-100 flex items-center gap-1`}
              >
                Comprar
                <svg className="relative -top-px fill-current text-secondary" fill="none" height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m8.50586 8.87207c-.12695-.10156-.17774-.25391-.17774-.43164 0-.15234.05079-.30469.17774-.40625l2.41214-2.4375h-10.308625c-.355469 0-.609375-.25391-.609375-.60938 0-.33007.253906-.60937.609375-.60937h10.308625l-2.41214-2.41211c-.25391-.22852-.25391-.60937 0-.83789.22852-.253907.60937-.253907.86328 0l3.45316 3.45312c.2285.22852.2285.60938 0 .8379l-3.45316 3.45312c-.25391.25391-.63476.25391-.86328 0z" /></svg>
              </a>
            }
            <Link
              href={`/aislantes/${product.id}`}
            >
              <a
                className={`${uppercaseTextClasses} text-primary hover:opacity-80 transition ease-in-out duration-100`}
              >
                M&aacute;s informaci&oacute;n
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center ml-2 md:ml-4">
          <img
            src={product.productImage}
            alt={product.name}
            className={`${product.productImageProportion === 'square' ? 'h-16' : 'h-28'} object-cover`}
          />
        </div>
      </div>
    </li>
  )
}