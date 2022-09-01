// Globals
import React from "react";

// Components
import { uppercaseTextClasses, standardTextClasses, smallTextClasses } from "../../classes/Text";

export default function Input({ id, type, required, validation, labelText, classes, reference, placeholder, defaultValue, min, onChangeMethod, validationMessage, theme, minLength, maxLength }) {
  return (
    <div className={`${classes} flex relative ${type === 'checkbox' ? 'flex-row items-center' : 'flex-col'}`}>
      <label
        htmlFor={id}
        className={`
          ${uppercaseTextClasses}
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
          ${type !== 'checkbox' ? 'mb-2' : 'order-last ml-2'}
        `}
      >
        {labelText}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        required={required}
        pattern={validation && validation}
        defaultValue={defaultValue ? defaultValue : null}
        min={min ? min : null}
        minLength={minLength ? minLength : null}
        maxLength={maxLength ? maxLength : null}
        className={`
          ${standardTextClasses}
          ${theme === 'dark' ? 'bg-white' : 'bg-gray-300 bg-opacity-50'}
          text-gray-700
          p-3 rounded-md
        `}
        ref={reference ? reference : null}
        placeholder={placeholder ? placeholder : 'Completá la información acá'}
        onChange={onChangeMethod ? onChangeMethod : null}
      />
      {
        validationMessage &&
        <p
          className={`${smallTextClasses} absolute -bottom-6 text-secondary`}
        >
          {validationMessage}
        </p>
      }
    </div>
  )
}