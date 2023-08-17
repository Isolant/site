import React from "react";

import ProductListCard from '../Cards/ProductListCard';

export default function ProductList({ 
  products
}) {

  return (
    <article className="md:col-span-2 lg:col-span-9">
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) =>
          <ProductListCard
            product={product}
            key={index}
          />
        )}
      </ul>
    </article>
  )
}