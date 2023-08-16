import { uppercaseTextClasses, standardTextClasses } from "../../classes/Text"

export default function Filters({
  productLines,
  categories,
  subcategories
}) {
  return (
    <aside className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-3">
        <h3
          className={`${uppercaseTextClasses} font-semibold text-gray-800`}
        >
          Categor&iacute;as
        </h3>
        <ul className="flex flex-col gap-2">
          {productLines.sort((a, b) => a.order > b.order ? 1: -1).map((productLine, index) => 
            <li
              key={index}
              className={`${standardTextClasses} text-gray-500`}
            >
              <button
                className="transition duration-100 ease-in-out hover:opacity-80 font-regular"
              >
                {productLine.title} ({productLine.products.length})
              </button>
            </li>
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

            return (
              <li
                key={index}
                className={`${standardTextClasses} text-gray-500 flex flex-col gap-2 items-start`}
              >
                {matchedSubcategories.map((subcategory, index) => {
                  return (
                    <button
                      className="transition duration-100 ease-in-out hover:opacity-80 font-regular"
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