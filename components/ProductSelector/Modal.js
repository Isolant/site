// Globals
import React, { useRef } from "react";
import { useRouter } from "next/router";
import Modal from 'react-modal';
import slugify from "react-slugify";

// Components
import TitlePackage from '../TitlePackage';
import Select from '../Forms/Select';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

// SVGs
import { ReactComponent as CloseIcon} from '../../images/icons/close.svg';

// Styles
import ModalStyles from './Modal.module.css';

// Classes
import { standardTextClasses } from "../../classes/Text";

// Content
import { attributes } from "../../content/productSelector/modal.md";

export default function ProductSelectorModal({
  modalIsOpen,
  setModalIsOpen,
  formContent
}) {

  // Content import
  let {
    modalDescription,
    modalCtaText
  } = attributes;

  // Initialize state and refs
  Modal.setAppElement('#__next');
  const router = useRouter();
  const m2Ref = useRef(null);
  const typologyRef = useRef(null);
  const areaCodeRef = useRef(null);
  const phoneRef = useRef(null);

  const typologyOptions = [];
  if(formContent.typologies !== undefined) {
    formContent.typologies.map(solution => typologyOptions.push({
      name: solution,
      value: slugify(solution),
    }))
  } else {
    typologyOptions.push({
      name: 'Otro',
      value: 'otro'
    });
  }

  // To handle the form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const selectedOption = {
      type: formContent.type,
      category: formContent.category,
      typology: typologyRef.current.value,
      m2: m2Ref.current.value,
      phone: `+54 9 ${areaCodeRef.current.value} ${phoneRef.current.value}`
    };

    localStorage.setItem('productSelectorOption', JSON.stringify(selectedOption));
    
    e.target.submit();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className={`container mx-auto max-w-3xl rounded-md bg-white my-16 p-4 lg:px-6 lg:py-2 relative`}
      style={{
        overlay: {
          backgroundColor: `rgba(53,56,65, .6)`,
          zIndex: 20,
          padding: '1rem'
        }
      }}
    >
      <button
        onClick={() => setModalIsOpen(false)}
        className="absolute right-0 -top-10 text-white"
      >
        <CloseIcon
          className="hover:opacity-90 fill-current text-white"
        />
      </button>
      <TitlePackage
        title={`Necesito aislar el <strong class="inline-block">${formContent.type}</strong><br />De mi: <strong class="inline-block">${formContent.category}</strong>`}
        text={modalDescription}
        additionalTitleClasses={`text-center mt-0 sm:mt-8 ${ModalStyles.Title}`}
        additionalTextClasses="max-w-md mx-auto text-center"
      />
      <form
        className="mt-4 md:my-4 xl:my-8 grid-cols-1 grid grid-cols-1 lg:grid-cols-2 gap-4"
        onSubmit={(e) => handleFormSubmit(e)}
        name="product-selector"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/selector-de-producto/resultado"
        method="POST"
      >
        {/* Hidden stuff for netlify's submissions */}
        <p className="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <input
          type="hidden"
          name="subject"
          value="Un usuario completó el selector de producto en el sitio web isolant"
        />
        <input
          type="hidden"
          name="form-name"
          value="product-selector"
        />
        {/* Global inputs */}
        <Select
          id="m2"
          labelText="Cantidad de m2 (aproximada):"
          reference={m2Ref}
          required={true}
          options={[
            {
              name: "80m2",
              value: "80"
            },
            {
              name: "80m2 a 200m2",
              value: "80-200"
            },
            {
              name: "200m2 a 500m2",
              value: "200-500"
            },
            {
              name: "Más de 500m2",
              value: "+500"
            },
          ]}
        />
        <Select
          id="typology"
          labelText="Tipología constructiva:"
          reference={typologyRef}
          options={typologyOptions}
          required={true}
        />
        <ul
          className="col-span-full grid grid-cols-4 lg:grid-cols-9 items-center gap-y-4 lg:gap-4 my-4"
        >
          <li className={`${standardTextClasses} text-gray-900 relative top-3`}>+54 9</li>
          <li className="col-span-3">
            <Input
              id="areaCode"
              labelText="Código de Área:"
              reference={areaCodeRef}
              required={true}
              type="number"
            />
          </li>
          <li className="col-span-5">
            <Input
              id="phone"
              labelText="Teléfono:"
              reference={phoneRef}
              required={true}
              type="number"
            />
          </li>
        </ul>
        <Button
          text={modalCtaText}
          color={'secondary'}
          isFormBtn={true}
          icon={true}
        />
      </form>
    </Modal>
  )
}