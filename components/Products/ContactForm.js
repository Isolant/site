// Globals
import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

// Components
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import Button from "../Forms/Button";

// Classes
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { uppercaseTextClasses } from "../../classes/Text";

export default function ContactForm({ background, theme }) {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  // Function to check for spam submissions
  const validateRecaptcha = (value) => {
    if(value === null) {
      return;
    } else {
      setIsCaptchaValid(true);
    }
  }

  return (
    <div
      className={`
        ${verticalPadding}
      `}
      style={{
        backgroundImage: background && `url(${background})` || ''
      }}
    >
      <form
        className={`${horizontalPadding} grid grid-cols-1 md:grid-cols-2 gap-8`}
        action={isCaptchaValid === true ? "/api/products" : '/error'}
        method="POST"
      >
        <fieldset className="md:col-span-full">
          <h6
            className={`
              ${uppercaseTextClasses}
              ${theme === "dark" ? "text-white" : "text-gray-700"}
              font-semibold
            `}
          >
            Formulario de contacto
          </h6>
        </fieldset>
        <Input
          id="name"
          labelText="Nombre y apellido:"
          required={true}
          type="text"
          theme={theme || 'light'}
          placeholder="Completalo acá"
        />
        <Input
          id="email"
          labelText="Email:"
          required={true}
          type="email"
          theme={theme || 'light'}
          placeholder="Completalo acá"
        />
        <Textarea
          id="message"
          labelText="Tu mensaje:"
          placeholder="Completá tu mensaje acá"
          required={true}
          theme={theme || 'light'}
          classes="md:col-span-2"
        />
        <div className="md:col-span-2 justify-self-center">
          <ReCAPTCHA
            sitekey="6Lc5d-kUAAAAADvGQo7UZFKtnmKPImwDSnRndmOS"
            onChange={validateRecaptcha}
          />
        </div>
        <div className="md:col-span-2 justify-center text-center">
          <Button
            text="Enviar consulta"
            color={'secondary'}
            isFormBtn={true}
            icon={true}
          />
        </div>
      </form>
    </div>
  )
}