// Globals
import React from "react";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

// Components
import TitlePackage from "../TitlePackage";

export default function TechnicalAssessorsMap({ title, text }) {

  return (
    <React.Fragment>
      <div
        className={`${horizontalPadding} ${verticalPadding} container mx-auto`}
        style={{ background: 'linear-gradient(180deg, #242829 0%, #4D6A79 100%)'}}
      >
        <TitlePackage
          titleHierarchy="h2"
          title={title}
          text={text}
          theme="dark"
        />
      </div>
      <section className="flex flex-col sm:flex-row h-screen relative">
        <div
          className="absolute w-full h-full z-10"
          onClick={(e) => e.currentTarget.style.pointerEvents = 'none'}
        />
        <iframe
          src="https://www.google.com/maps/d/embed?mid=166ZyP2AxNDsNrfbJZSL2XI_vNnngV3MU&hl=es"
          className="flex-1 h-full"
        />
        <iframe
          src="https://www.google.com/maps/d/embed?mid=15qF7eZlp6bXKI99WKN6NHbvHpPDy3DqV&hl=es"
          className="flex-1 h-full"
        />
      </section>
    </React.Fragment>
  )
}