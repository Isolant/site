import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { uppercaseTextClasses, standardTextClasses, smallTextClasses } from "../../classes/Text";

import styles from './Filters.module.css';

export default function Filters({
  productLines,
  categories,
  subcategories,
  setActiveProducts,
  allProducts,
}) {
  const router = useRouter();
  const query = router.query;

  const [isExpanded, setIsExpanded] = useState({
    category: '',
    subcategory: ''
  });

  const setActiveProductsAndCategory = (products, category) => {
    setActiveProducts(products);
    setIsExpanded(category);
  }
  
  useEffect(() => {
    if(query && query.categoria) {
      const selectedCategory = categories.filter((category) => category.id === query.categoria || category.id === query.categoria.toLowerCase());
      if(!selectedCategory.length) return;
      
      setActiveProductsAndCategory(selectedCategory[0].totalProducts, { category: selectedCategory[0].title, subcategory: '' })
    } else if(query && query.linea) {
      const selectedProductLine = productLines.filter((productLine) => productLine.id === query.linea || productLine.id === query.linea.toLowerCase());
      if(!selectedProductLine.length) return;
      setActiveProductsAndCategory(selectedProductLine[0].matchedProducts, { category: selectedProductLine[0].title, subcategory: '' })
    } else {
      setActiveProductsAndCategory(allProducts, { category: '', subcategory: '' })
    }
  }, [query]);

  return (
    <aside className="grid gap-4 md:gap-8 lg:col-span-3">
      {/* Product lines */}
      <div className="flex flex-col gap-3">
        <h3
          className={`${uppercaseTextClasses} font-semibold text-gray-800`}
        >
          Categor&iacute;as
        </h3>
        <ul className="flex flex-col gap-2">
          {productLines.sort((a, b) => a.order > b.order ? 1: -1).map((productLine, index) => {
            let productArray = [];
            productLine.products.map((productName) => {
              productArray.push(allProducts.find(product => product.name === productName));
              return productLine.matchedProducts = productArray;
            });

            return (
              <li
                key={index}
                className={`${standardTextClasses} ${isExpanded === productLine.title ? 'text-gray-800' : 'text-gray-500'}`}
              >
                <button
                  className="transition duration-100 ease-in-out hover:opacity-80 font-light text-left flex items-baseline"
                  onClick={() => setActiveProductsAndCategory(productLine.matchedProducts, productLine.title)}
                >
                  {productLine.title} ({productLine.products.length})
                </button>
              </li>
            )}
          )}
        </ul>
      </div>
      {/* Categories */}
      <div className="flex flex-col gap-3">
        <h3
          className={`${uppercaseTextClasses} font-semibold text-gray-800`}
        >
          Usos
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.sort((a, b) => a.order > b.order ? 1: -1).map((category, index) => {
            
            const getAllProducts = (arr) => {
              let allProducts = [];

              for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i].matchedProducts)) {
                  allProducts.push(arr[i].matchedProducts);
                }
              }

              const flattenedArray = allProducts.flat();
              const uniqueProducts = new Set(flattenedArray);
              const uniqueArray = Array.from(uniqueProducts);

              return uniqueArray;
            }

            const matchedSubcategories = category.subcategories.map(sub => subcategories.find(subcat => subcat.title === sub));
            category.totalProducts = getAllProducts(matchedSubcategories);

            matchedSubcategories.map((subcat) => {
              let productArray = [];

              subcat.products.map((sub) => {
                productArray.push(allProducts.find(product => product.name === sub));
              });
              
              return subcat.matchedProducts = productArray;
            });

            return (
              <li
                key={index}
                className={`${standardTextClasses} flex flex-col gap-2 items-start mb-2`}
              >
                <button
                  className={`${standardTextClasses} ${isExpanded.category === category.title ? "text-gray-800" : "text-gray-500"} flex items-center gap-2`}
                  onClick={() => setActiveProductsAndCategory(category.totalProducts, { category: category.title, subcategory: ''})}
                >
                  {category.title}{" "}
                  <span>({category.totalProducts.length})</span>
                  <svg className={`fill-current transition ease-in-out duration-200 ${isExpanded.category === category.title ? 'rotate-180' : ''}`} fill="none" height="7" viewBox="0 0 12 7" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m11.611 1.47145-5.22268 5.0039c-.16406.13672-.32813.19141-.46485.19141-.16406 0-.32812-.05469-.46484-.16406l-5.249999-5.03125c-.2734374-.2461-.2734374-.683595-.027344-.929689.246094-.273438.683594-.273438.929683-.027344l4.8125 4.593753 4.78513-4.593753c.2461-.246094.6836-.246094.9297.027344.2461.246094.2461.683589-.0273.929689z" /></svg>
                </button>
                <ol
                  className={`flex flex-col gap-2 pl-4 ${isExpanded.category === category.title ? '' : 'hidden'}`}
                >
                  {matchedSubcategories.map((subcategory, index) => {
                    return (
                      <li key={index}>
                        <button
                          className={`${smallTextClasses} ${styles.SubcategoryButton} transition duration-100 ease-in-out hover:opacity-80 text-left ${isExpanded.subcategory === subcategory.title ? 'text-gray-800' : 'text-gray-500'}`}
                          onClick={() => setActiveProductsAndCategory(subcategory.matchedProducts, { category: category.title, subcategory: subcategory.title })}
                          key={index}
                        >
                          {subcategory.title}
                        </button>
                      </li>
                    )
                  })}
                </ol>
              </li>
            )
          })}
        </ul>
        {/* Reset filters */}
        <div className="md:mt-4">
          <button
            className={`transition duration-100 ease-in-out hover:opacity-80 font-light text-left flex items-baseline text-gray-500 ${standardTextClasses}`}
            onClick={() => setActiveProductsAndCategory(allProducts, { category: '', subcategory: ''})}
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </aside>
  )
}