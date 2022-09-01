// Globals
import React from "react";

// Classes
import { uppercaseTextClasses } from "../classes/Text";

export default function Tag({ text, color }) {
  return (
    <span
      style={{ backgroundColor: color }}
      className={`${uppercaseTextClasses} text-white rounded-sm px-2 py-1`}
    >
      {text}
    </span>
  )
}