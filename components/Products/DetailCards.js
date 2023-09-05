import React from "react";

export default function DetailCards({ 
  cards,
}) {
  return (
    <ul>
      {cards.map((card, index) =>
        <li
          key={index}
        >
          <img
            src={card.image}
            alt={card.title}
          />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </li>
      )}
    </ul>
  )
}