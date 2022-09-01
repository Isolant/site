// Globals
import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

// Components
import Textarea from '../Forms/Textarea';
import Button from "../Forms/Button";

// Classes
import { horizontalPadding } from "../../classes/Spacing";

export default function EthicsForm() {
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
        className={`${horizontalPadding} pb-12 sm:pb-16 md:pb-24 grid grid-cols-1 gap-8`}
        action={isCaptchaValid === true ? "/api/ethics" : '/error'}
        method="POST"
      >
        <Textarea
          id="message"
          labelText="Tu mensaje:"
          placeholder="Completá tu mensaje acá"
          required={true}
        />
        <ReCAPTCHA
          sitekey="6Lc5d-kUAAAAADvGQo7UZFKtnmKPImwDSnRndmOS"
          onChange={validateRecaptcha}
        />
        <Button
          text="Enviar"
          color={'secondary'}
          isFormBtn={true}
          icon={true}
        />
      </form>
    </React.Fragment>
  )
}