import React from "react";

import ContactForm from './ContactForm';

export default function Contact({ 
  image,
  title,
  text,
  products
}) {
  return (
    <section>
      <img
        src={image}
        alt={title}
      />
      <h5>{title}</h5>
      <p>{text}</p>
      <ContactForm
        products={products}
      />
    </section>
  )
}