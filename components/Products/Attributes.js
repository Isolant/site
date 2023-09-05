import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Attributes({ 
  title,
  text,
  attributes
}) {
  return (
    <section>
      <ReactMarkdown>{title}</ReactMarkdown>
      <ReactMarkdown>{text}</ReactMarkdown>
      <ul>
        {attributes.map((attribute, index) =>
          <li
            key={index}
          >
            <img
              src={attribute.image}
              alt={attribute.title}
            />
            <h3>{attribute.title}</h3>
            <p>{attribute.text}</p>
          </li>
        )}
      </ul>
    </section>
  )
}