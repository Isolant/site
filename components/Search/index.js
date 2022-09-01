// Globals
import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-dom";

// Components
import SearchBox from './SearchBox';
import Hits from './Hits';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

export default function Search() {
  return (
      <div className="container z-20 absolute py-20 sm:py-16 px-4">
        <InstantSearch 
          searchClient={searchClient} 
          indexName="isolant_website"
        >
          <Configure
            hitsPerPage={10}
          />
          <div className="bg-white p-4 mx-auto max-w-2xl rounded-md">
            <SearchBox />
            <Hits />
          </div>
        </InstantSearch>
      </div>
  )
}