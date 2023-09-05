import React from "react";

import styles from './map.module.css';

export default function Map({ 
  children,
}) {
  return (
    <section
      className={`
        w-full h-screen relative
        ${styles.iframe}
      `}
    >
      <div
        className="absolute w-full h-full z-10"
        onClick={(e) => e.currentTarget.remove()}
      />
      <div
        dangerouslySetInnerHTML={{ __html: children }}
        className="absolute w-full h-full"
      />
    </section>
  )
}