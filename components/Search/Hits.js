// Globals
import React from 'react';
import { connectStateResults, Highlight } from "react-instantsearch-dom";
import Link from 'next/link';

// Classes
import { boldSubtitleClasses, smallTextClasses } from "../../classes/Text";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  
  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>No se encontraron resultados.</p>
        )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <li
              key={hit.objectID}
              className="py-4 border-b border-gray-200"
            >
              <Link href={hit.url}>
                <a className="block hover:opacity-60">
                  <p
                    className={`${smallTextClasses} text-gray-500 capitalize`}
                  >
                    {hit.url.split('/')[1].replace('-', ' ')}
                    {hit.url.split('/')[2] && ` - ${hit.url.split('/')[2].replace('-', ' ')}`}
                  </p>
                  <h3 className={`${boldSubtitleClasses} mb-1 text-gray-700`}>{hit.title}</h3>
                  <Highlight
                    attribute="content"
                    hit={hit}
                    className={`${smallTextClasses} line-clamp-3 text-gray-600`}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits);