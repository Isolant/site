import React from "react";

import CardSlider from '../Home/CardSlider';
import TitlePackage from "../TitlePackage";
import { horizontalPadding } from "../../classes/Spacing";

export default function Tutorials({ 
  title,
  text,
  tutorials,
  background,
  color
}) {
  return (
    <section
      className="bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `${background ? `url(${background})` : 'url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)'}`}}
    >
      <div className={`${horizontalPadding} mx-auto container text-center text-white`}>
        <TitlePackage
          titleHierarchy="h6"
          title={title}
          text={text}
          additionalTitleClasses="flex justify-center"
          additionalTextClasses="max-w-sm mx-auto"
          theme="dark"
        />
      </div>
      <CardSlider
        services={tutorials}
        boxed={true}
        noBackground={true}
        smallPadding={true}
        color={color}
        decorator={<svg className="fill-inherit" fill="none" height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9.16016 9.16992c-.13672-.10937-.19141-.27344-.19141-.46484 0-.16406.05469-.32813.19141-.4375l2.59764-2.625h-11.10155c-.382812 0-.65625-.27344-.65625-.65625 0-.35547.273438-.65625.65625-.65625h11.10155l-2.59764-2.59766c-.27344-.24609-.27344-.65625 0-.902342.24609-.273437.65625-.273437.92964 0l3.7188 3.718752c.2461.24609.2461.65625 0 .90234l-3.7188 3.71875c-.27339.27344-.68355.27344-.92964 0z" /></svg>}
      />
    </section>
  )
}