// Globals
import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

// Components
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import Button from "../Forms/Button";

// Classes
import { horizontalPadding } from "../../classes/Spacing";

export default function ContactForm() {
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
    <React.Fragment>
      <form
        className={`${horizontalPadding} grid grid-cols-1 md:grid-cols-2 gap-8`}
        action={isCaptchaValid === true ? "/api/products" : '/error'}
        method="POST"
      >
        <Input
          id="name"
          labelText="Nombre y apellido:"
          required={true}
          type="text"
          theme="light"
          placeholder="Completalo acá"
        />
        <Input
          id="email"
          labelText="Email:"
          required={true}
          type="email"
          theme="light"
          placeholder="Completalo acá"
        />
        <Textarea
          id="message"
          labelText="Tu mensaje:"
          placeholder="Completá tu mensaje acá"
          required={true}
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
    </React.Fragment>
  )
}