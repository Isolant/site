import React from "react";
import ReactMarkdown from 'react-markdown';

export default function Hero({ 
  image,
  product,
  logo
}) {
  return (
    <section
      className={`relative flex items-center flex-col overflow-hidden`}
    >
      <div
        className="w-full h-full relative"
      >
        <h1
          className="
            font-condensed
            text-5xl md:text-6xl lg:text-[120px] xl:text-[180px]
            tracking-[20px] lg:tracking-[60px] xl:tracking-[90px]
            text-white
            absolute w-full h-full
            flex items-center justify-center
          "
        >
          <ReactMarkdown>{product}</ReactMarkdown>
        </h1>
        {logo &&
          <img
            src={logo}
            alt={product}
            className="max-w-[120px] md:max-w-xs absolute z-10 left-4 bottom-4 md:left-12 md:bottom-12"
          />
        }
        <img
          src={image}
          alt={product}
          className="w-full h-screen object-cover object-top"
        />
      </div>
    </section>
  )
}