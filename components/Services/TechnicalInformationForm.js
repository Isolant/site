// Globals
import React, { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

// Components
import Select from '../Forms/Select';
import Input from '../Forms/Input';
import Button from "../Forms/Button";
import TitlePackage from "../TitlePackage";

// Classes
import { horizontalPadding, verticalPadding } from '../../classes/Spacing';

// Styles
import TechnicalInformationFormStyles from './TechnicalInformationForm.module.css';

export default function TechnicalInformationForm({ products, title, text }) {
  // Initialize state and refs
  const [activeType, setActiveType] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const nameRef = useRef(null);
  const productRef = useRef(null);
  const otherRef = useRef(null);
  const typeRef = useRef(null);

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
    <section className={`${horizontalPadding} ${verticalPadding} bg-gray-100`}>
      <TitlePackage
        titleHierarchy={"h6"}
        title={title}
        text={text}
        theme="light"
        additionalTitleClasses={TechnicalInformationFormStyles.Title}
        additionalTextClasses={TechnicalInformationFormStyles.Text}
      />
      <form
        className={`grid grid-cols-2 gap-8 mt-8`}
        action={isCaptchaValid === true ? "/api/technical-information" : "/error"}
        method="POST"
      >
        <Input
          id="name"
          type="text"
          required={true}
          labelText="Nombre y Apellido"
          placeholder="Completá tu nombre y apellido acá"
          reference={nameRef}
        />
        <Select
          id="product"
          labelText="Aislante"
          options={[...productsInfo, {
            name: "Otros",
            value: 'otros'
          }]}
          required={true}
          reference={productRef}
          onChangeMethod={(e) => setActiveType(e.target.selectedOptions[0].value)}
        />
        {activeType === 'otros' &&
          <Input
            id="other"
            labelText="Producto:"
            placeholder="Completá el producto acá"
            required={`${activeType === 'otros' ? true : false}`}
            classes={activeType === 'otros' ? '' : 'hidden'}
            reference={otherRef}
          />
        }
        <Select
          id="type"
          labelText="Tipo de consulta:"
          reference={typeRef}
          classes={activeType === 'otros' ? '' : 'col-span-2'}
          options={[{
            name: 'Deformación',
            value: 'deformacion'
          }, {
            name: 'Envejecimiento acelerado',
            value: 'envejecimiento-acelerado'
          }, {
            name: 'Fuego y Humos',
            value: 'fuego-y-humos'
          }, {
            name: 'Resistencia Térmica',
            value: 'resistencia-termica'
          }, {
            name: 'Permeancia al vapor',
            value: 'permeancia-al-vapor'
          }, {
            name: 'Acústica',
            value: 'acustica'
          }]}
          required={true}
        />
        <div className="md:col-span-full">
          <ReCAPTCHA
            sitekey="6Lc5d-kUAAAAADvGQo7UZFKtnmKPImwDSnRndmOS"
            onChange={validateRecaptcha}
          />
        </div>
        <div className="col-span-full text-center">
          <Button
            text="Enviar"
            color={'secondary'}
            isFormBtn={true}
            icon={true}
          />
        </div>
      </form>
    </section>
  )
}