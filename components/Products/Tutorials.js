import React from "react";

import CardSlider from '../Home/CardSlider';

export default function Tutorials({ 
  title,
  text,
  tutorials
}) {
  return (
    <section>
      <h4>{title}</h4>
      <p>{text}</p>
      <CardSlider
        services={tutorials}
        boxed={true}
      />
    </section>
  )
}