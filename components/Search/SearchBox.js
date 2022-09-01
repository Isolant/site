// Globals
import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

// Classes
import { uppercaseTextClasses, standardTextClasses } from "../../classes/Text";

function SearchBox({ refine }) {
  return (
    <form
      action=""
      role="search"
      className="flex flex-col"
    >
      <label
        htmlFor="algolia_search"
        className={`${uppercaseTextClasses} text-gray-500 mb-2`}
      >
        Buscar en el sitio web
      </label>
      <input
        id="algolia_search"
        type="search"
        placeholder="Ejemplo: TBA"
        onChange={(e) => refine(e.currentTarget.value)}
        className={`${standardTextClasses} text-gray-700 p-3 rounded-md bg-gray-300 bg-opacity-50`}
      />
    </form>
  );
}

export default connectSearchBox(SearchBox);