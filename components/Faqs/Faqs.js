// Globals
import React from "react";

// Classes
import { boldSubtitleClasses, standardTextClasses } from "../../classes/Text";

// SVGs
import { ReactComponent as ArrowIcon } from '../../public/images/icons/chevron-down.svg';

export default function Faqs({ categories, activeFaqs, activeCategory }) {
  const toggleFaqVisibility = (e) => {
    const faqContainer = e.currentTarget;
    const faqContent = e.currentTarget.lastElementChild;
    const faqTitle = e.currentTarget.children[0].children[0];
    const arrowIcon = e.currentTarget.children[0].children[1];

    faqContainer.classList.toggle("border-primary");
    faqContainer.classList.toggle("border-gray-100");
    faqTitle.classList.toggle("text-primary");
    faqTitle.classList.toggle("text-gray-700");
    faqContent.classList.toggle("hidden");
    arrowIcon.classList.toggle("rotate-180");
  };

  console.log(activeCategory);
  
  return (
    <article className="lg:col-span-5 pt-8">
      {categories
        .filter(filteredCategory => {
          if(activeCategory === 'Todas') {
            return activeFaqs;
          } else if(filteredCategory.name === activeCategory) {
            return filteredCategory;
          }
        })
        .map((category, index) => (
          <ul
            key={index}
          >
            <li
              className={`
                ${boldSubtitleClasses}
                text-gray-900 mb-4
                ${index === 0 ? '' : 'mt-12 sm:mt-24'}
              `}
            >
              {category.name}
            </li>
            {activeFaqs
              .filter(activeFaq => activeFaq.category === category.name)
              .map((faq, index) => (
                <li
                  key={index}
                  onClick={(e) => toggleFaqVisibility(e)}
                  className={`
                    p-4 
                    rounded-md
                    border border-gray-100
                    cursor-pointer
                    mb-4
                  `}
                >
                  <div className="flex items-center">
                    <h3
                      className={`
                        flex-1
                        ${standardTextClasses}
                        text-gray-700
                      `}
                    >
                      {faq.title}
                    </h3>
                    <ArrowIcon
                      className="transform transition-transform fill-current text-gray-300 ml-4"
                    />
                  </div>
                  <p 
                    dangerouslySetInnerHTML={{ __html: faq.text }}
                    className={`
                      hidden mt-4
                      ${standardTextClasses}
                      text-gray-600
                    `}
                  />
                </li>
              )
            )}
          </ul>
        )
      )}
    </article>
  )
}