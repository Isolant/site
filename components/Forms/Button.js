// Globals
import React from "react";
import Link from 'next/link';

// Icons
import { ReactComponent as ArrowIcon } from "../../public/images/icons/arrow-right.svg";

// Styles
import ButtonStyles from './Button.module.css';

export default function Button({ href, text, color, isExternal, isFormBtn, margin, icon, classes, size, action }) {
  const dontPurgeThese = [
    "bg-primary", 'bg-secondary', 'bg-white', "text-gray-700", "text-white"
  ];
  
  const buttonClases = `
    inline-flex items-center uppercase text-sm justify-center tracking-wider
    ${size === 'small' ? 'p-2 rounded-md' : 'px-8 sm:px-12 py-4 rounded-full' }
    bg-${color}
    ${classes}
    ${margin}
    ${color === 'white' ? 'text-gray-700 hover:opacity-90' : 'text-white'}
    ${color === 'transparent' ? 'border border-white' : ''}
    ${color === 'gray' ? 'border border-gray-400 text-gray-600 hover:opacity-60' : ''}
    ${color === 'primary' ? 'hover:bg-secondary group-hover:bg-secondary group-hover:text-white hover:text-white' : color === 'secondary' ? 'hover:bg-primary group-hover:bg-primary group-hover:text-white hover:text-white' : 'hover:bg-white hover:text-gray-700 group-hover:bg-white group-hover:text-gray-700'}
  `;

  const iconClasses = `
    ml-2 fill-current
    ${color === 'primary' || color === 'secondary' ? 'text-white' : color === 'white' ? 'text-gray-700' : ButtonStyles.ButtonWithIcon}
  `;

  return (
    isExternal === true ?
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClases}
      >
        {text}
        {icon === true &&
            <ArrowIcon
              className={iconClasses}
            />
          }
      </a>
    :
    isFormBtn === true ?
      <button
        type="submit"
        className={`${buttonClases} cursor-pointer`}
        onClick={action ? action : null}
      >
        {text}
        {icon === true &&
          <ArrowIcon
            className={iconClasses}
          />
        }
      </button>
    :
      <Link
        href={href}
        className={buttonClases}
      >
        {text}
        {icon === true &&
          <ArrowIcon
            className={iconClasses}
          />
        }
      </Link>
  )
}