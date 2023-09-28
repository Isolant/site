import React from "react";

import { standardTextClasses, uppercaseTextClasses } from '../../classes/Text';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  
  const nextPage = () => {
    if(currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  
  const prevPage = () => {
    if(currentPage !== 1) setCurrentPage(currentPage - 1);
  }
  
  return (
    <nav className="md:col-start-2 md:col-span-2 lg:col-start-4 lg:col-span-full mt-4 md:mt-8">
      <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <li>
          <button
            className={`${uppercaseTextClasses} text-primary font-medium transition ease-in-out duration-100 hover:opacity-80 flex items-center gap-2`}
            onClick={prevPage}
          >
            <svg fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m6.28223.816406.54687.519534c.13672.13672.13672.35547 0 .46484l-4.23828 4.23828h9.32418c.1914 0 .3282.16406.3282.32813v.76562c0 .19141-.1368.32813-.3282.32813h-9.32418l4.23828 4.26566c.13672.1093.13672.3281 0 .4648l-.54687.5195c-.10938.1368-.32813.1368-.46485 0l-5.714841-5.71481c-.1367187-.13671-.1367187-.32812 0-.46484l5.714841-5.714844c.13672-.136718.35547-.136718.46485 0z" fill="#14bef0"/></svg>
            <span className="relative top-px">Anterior</span>
          </button>
        </li>
        <li>
          <ol className="flex items-center gap-2">
            {pageNumbers.map(pgNumber => (
              <li
                key={pgNumber} 
                className={`
                  ${standardTextClasses}
                  ${currentPage == pgNumber ? 'text-gray-700 bg-gray-100' : 'text-gray-500 bg-white'}
                  rounded-xl flex items-center justify-center
                  transition ease-in-out duration-100 hover:text-gray-700 hover:bg-gray-100
                `}
              >
                <button
                  onClick={() => setCurrentPage(pgNumber)}
                  className="w-10 h-10"
                >
                  {pgNumber}
                </button>
              </li>
            ))}
          </ol>
        </li>
        <li>
          <button
            className={`${uppercaseTextClasses} text-primary font-medium transition ease-in-out duration-100 hover:opacity-80 flex items-center gap-2`}
            onClick={nextPage}
          >
            <span className="relative top-px">Siguiente</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.96094 0.816406L5.41406 1.33594C5.27734 1.47266 5.27734 1.69141 5.41406 1.80078L9.65234 6.03906H0.328125C0.136719 6.03906 0 6.20312 0 6.36719V7.13281C0 7.32422 0.136719 7.46094 0.328125 7.46094H9.65234L5.41406 11.7266C5.27734 11.8359 5.27734 12.0547 5.41406 12.1914L5.96094 12.7109C6.07031 12.8477 6.28906 12.8477 6.42578 12.7109L12.1406 6.99609C12.2773 6.85938 12.2773 6.66797 12.1406 6.53125L6.42578 0.816406C6.28906 0.679688 6.07031 0.679688 5.96094 0.816406Z" fill="#14BEF0"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination