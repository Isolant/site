// Globals
import React from "react";

// Components
import { uppercaseTextClasses, standardTextClasses } from "../../classes/Text";

// Styles
import styles from './Select.module.css';

export default function Select({ id, labelText, options, classes, required, reference, onChangeMethod, selected, theme, placeholder, scrolled }) {
  return (
    <div className={`${classes} flex flex-col`}>
      <label
        htmlFor={id}
        className={`
          ${uppercaseTextClasses}
          ${theme && theme === 'dark' ? 'text-gray-400'
            : theme === 'custom' && scrolled ?
            'text-gray-400 mb-1 text-xs'
            : theme === 'custom' && !scrolled ?
            'text-white mb-1 text-xs'
            :'text-gray-500'
          }
          mb-2
        `}
      >
        {labelText}
      </label>
      <select
        name={id}
        id={id}
        required={required}
        className={`
          ${styles.Select}
          ${standardTextClasses}
          ${theme && theme === 'dark' ? 'bg-white'
            : theme === 'custom' && scrolled ?
            'px-0 pt-0 pb-1 bg-transparent rounded-none border-b'
            : theme === 'custom' && !scrolled ?
            'px-0 pt-0 pb-1 bg-transparent rounded-none border-b text-white'
            :'bg-gray-300 bg-opacity-50'
          }
          text-gray-700 p-3 rounded-md
        `}
        ref={reference ? reference : null}
        onChange={onChangeMethod}
      >
        <option
          disabled
          selected={!selected ? true : false}
          value=""
        >
          {placeholder ? placeholder : 'Elegí una opción del menú'}
        </option>
        {options && options.map((option, index) => {
          return (
            <option
              key={index}
              value={option.value}
              // selected={option.value === selected ? true : false}
            >
              {option.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}