// Globals
import React from "react";

// SVGs
import { ReactComponent as Dots } from '../public/images/misc/dots.svg';

export default function Product({ product, name, classes, decorations }) {
  return (
    <div
      className={`${classes}`}
    >
      <img
        src={product}
        alt={name}
        className="relative z-10"
      />
      {decorations === true &&
        <Dots
          className="absolute -bottom-4 -right-8 xl:-right-12 text-white fill-current"
        />
      }
    </div>
  )
}