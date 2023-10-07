// Globals
import React, { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

// Components
import TitlePackage from "../TitlePackage";
import Select from '../Forms/Select';
import Textarea from '../Forms/Textarea';
import Button from "../Forms/Button";

export default function Form({ products, title, text }) {
  // Initialize state and refs
  const [activeType, setActiveType] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const typeRef = useRef(null);
  const productRef = useRef(null);
  const contentRef = useRef(null);

  // Populate the options for the aislantes field
  const productsInfo = [];
  products.map((product) => productsInfo.push({
    name: product.name,
    value: product.id
  }));

  // Function to check for spam submissions
  const validateRecaptcha = (value) => {
    if(value === null) {
      return;
    } else {
      setIsCaptchaValid(true);
    }
  }

  return (
    <React.Fragment>
      {title &&
        <TitlePackage
          titleHierarchy={"h6"}
          title={title}
          text={text}
          theme="light"
        />
      }
      <form
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-8`}
        action={isCaptchaValid === true ? "/api/about-us" : '/error'}
        method="POST"
      >
        <Select
          id="type"
          labelText="Tipo de consulta:"
          reference={typeRef}
          options={[{
            name: 'Resistencia térmica',
            value: 'resistencia-termica'
          }, {
            name: 'Propagación de llama y humos',
            value: 'propagacion-de-llama-y-humos'
          }, {
            name: 'Deformación / Punzonado',
            value: 'deformacion-punzonado'
          }, {
            name: 'Resistencia tracción',
            value: 'resistencia-traccion'
          }, {
            name: 'Permeancia al vapor',
            value: 'permeancia-al-vapor'
          }, {
            name: 'Permeabilidad al agua',
            value: 'permeabilidad-al-agua'
          }, {
            name: 'Acústica',
            value: 'acustica'
          }, {
            name: 'Resistencia química',
            value: 'resistencia-quimica'
          }, {
            name: "Hoja de seguridad",
            value: 'hoja-de-seguridad'
          }, {
            name: "Otros",
            value: 'otros'
          }]}
          required={true}
          onChangeMethod={(e) => setActiveType(e.target.selectedOptions[0].value)}
        />
        <Select
          id="product"
          labelText="Aislante"
          options={productsInfo}
          required={true}
          reference={productRef}
        />
        {activeType === 'otros' &&
          <Textarea
            id="message"
            labelText="Mensaje:"
            placeholder="Completá tu mensaje acá"
            required={`${activeType === 'otros' ? true : false}`}
            classes={`md:col-span-full ${activeType === 'otros' ? '' : 'hidden'}`}
            reference={contentRef}
          />
        }
        <div className="md:col-span-full">
          <ReCAPTCHA
            sitekey="6Lc5d-kUAAAAADvGQo7UZFKtnmKPImwDSnRndmOS"
            onChange={validateRecaptcha}
          />
        </div>
        <div>
          <Button
            text="Enviar"
            color={'secondary'}
            isFormBtn={true}
            icon={true}
          />
        </div>
      </form>
    </React.Fragment>
  )
}