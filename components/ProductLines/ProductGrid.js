// Globals
import React from "react";
import slugify from 'react-slugify';
import dynamic from 'next/dynamic';

// Components
const ProductCard = dynamic(() => import('../../components/Cards/ProductCard'), {
  ssr: false
})

// Classes
import { horizontalPadding, verticalPadding } from '../../classes/Spacing';

// Styles
import ProductGridStyles from './ProductGrid.module.css';

export default function ProductGrid({ products, classes }) {
  const highlightedProducts = products.filter(product => product.highlighted === true);

  return (
    <section
      className={`${horizontalPadding} ${verticalPadding} bg-gray-100`}
    >
      <ul
        className={`
          ${highlightedProducts.length > 0 && ProductGridStyles.HighlightedProducts}
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
        `}
      >
        {products && products
          .sort((a, b) => a.order > b.order ? 1 : -1)
          .map((product, index) => {
            return(
              <ProductCard
                key={index}
                product={product}
                classes={
                  product.highlighted ? 
                    `${classes} highlighted highlighted-${index} highlighted-${slugify(product.name)}`
                  :
                  `${classes}`
                }
              />
            )
        })}
      </ul>
    </section>
  )
}