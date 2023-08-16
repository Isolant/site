import { uppercaseTextClasses, standardTextClasses } from "../../classes/Text"

export default function Filters({
  productLines,
  categories,
  subcategories,
  activeProducts,
  setActiveProducts,
  allProducts
}) {
  return (
    <aside className="grid gap-4 md:gap-8 lg:col-span-3">
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
                className={`${standardTextClasses} text-gray-500`}
              >
                <button
                  className="transition duration-100 ease-in-out hover:opacity-80 font-regular text-left flex items-baseline"
                  onClick={() => setActiveProducts(productLine.matchedProducts)}
                >
                  {productLine.title} ({productLine.products.length})
                </button>
              </li>
            )}
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3
          className={`${uppercaseTextClasses} font-semibold text-gray-800`}
        >
          Usos
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.sort((a, b) => a.order > b.order ? 1: -1).map((category, index) => {
            const matchedSubcategories = category.subcategories.map(sub => subcategories.find(subcat => subcat.title === sub));
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
                className={`${standardTextClasses} text-gray-500 flex flex-col gap-2 items-start`}
              >
                {matchedSubcategories.map((subcategory, index) => {
                  return (
                    <button
                      className="transition duration-100 ease-in-out hover:opacity-80 font-regular text-left"
                      onClick={() => setActiveProducts(subcategory.matchedProducts)}
                      key={index}
                    >
                      {subcategory.title} ({subcategory.products.length})
                    </button>
                  )
                })}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}