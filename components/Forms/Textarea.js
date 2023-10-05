// Globals
import React from "react";

// Components
import { uppercaseTextClasses, standardTextClasses } from "../../classes/Text";

export default function Textarea({ id, type, required, labelText, classes, reference, placeholder, theme }) {
  return (
    <div className={`${classes} flex flex-col`}>
      <label
        htmlFor={id}
        className={`${uppercaseTextClasses} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-2`}
      >
        {labelText}
        <span className="text-gray-400">{required === false ? ' (Opcional)' : ''}</span>
      </label>
      <textarea
        name={id}
        id={id}
        type={type}
        required={required}
        className={`${standardTextClasses} text-gray-700 p-3 rounded-md ${theme === 'dark' ? 'bg-white' : 'bg-gray-300 bg-opacity-50'} resize-none h-32`}
        ref={reference ? reference : null}
        placeholder={placeholder ? placeholder : 'Completá la información acá'}
      />
    </div>
  )
}