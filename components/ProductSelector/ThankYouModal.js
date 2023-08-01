// Globals
import React from "react";
import Modal from 'react-modal';

// Components
import TitlePackage from '../TitlePackage';
import Button from '../Forms/Button';

// SVGs
import { ReactComponent as CloseIcon} from '../../../images/icons/close.svg';
import { ReactComponent as PhoneIcon} from '../../../images/icons/phone.svg';

// Styles
import ModalStyles from './Modal.module.css';

// Content
import { attributes } from "../../content/productSelector/thankYouModal.md";

export default function ThankYouModal({
  modalIsOpen,
  setModalIsOpen,
  product
}) {
  // Content import
  let {
    productSelectorThankYouModalTitle,
    productSelectorThankYouModalDescription,
    productSelectorThankYouModalCtaText
  } = attributes;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="container mx-auto text-center max-w-3xl rounded-md bg-white my-16 p-4 lg:px-6 lg:py-2 relative"
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
      <div 
        className="hidden lg:flex w-28 h-28 rounded-full bg-white shadow-sm relative mx-auto -top-12 items-center justify-center"
      >
        <PhoneIcon className="fill-current text-primary" />
      </div>
      <TitlePackage
        title={productSelectorThankYouModalTitle}
        text={productSelectorThankYouModalDescription}
        additionalTitleClasses={`text-center ${ModalStyles.Title}`}
        additionalTextClasses="max-w-md mx-auto text-center"
      />      
      <Button
        text={productSelectorThankYouModalCtaText}
        color={'secondary'}
        href={`/contacto?comprar-isolant=${product.id}`}
        icon={true}
        classes="mt-4 mb-2 sm:my-4 lg:mt-6 lg:mb-8"
      />
    </Modal>
  )
}