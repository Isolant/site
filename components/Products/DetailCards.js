import React from "react";

import OtherServicesCard from "../Cards/OtherServicesCard";

import { verticalPadding } from "../../classes/Spacing";

export default function DetailCards({ 
  cards,
  background,
}) {
  return (
    <section
      className={`
        ${verticalPadding}
        bg-cover
      `}
      style={{ backgroundImage: background ? `url(${background})` : 'url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)' }}
    >
      <ul
        className="container mx-auto relative px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
      >
        {cards.map((card, index) =>
          <li
            key={index}
          >
            <OtherServicesCard
              service={card}
            />
          </li>
        )}
      </ul>
    </section>
  )
}