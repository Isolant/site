// Globals
import React from "react";

// Components
import TitlePackage from '../TitlePackage';
import Product from '../Product';

// Styles
import HighlightedProductStyles from './HighlightedProduct.module.css';

// Classes
import { uppercaseTextClasses } from "../../classes/Text";

// SVGs
import { ReactComponent as Dots } from '../../public/images/misc/dots.svg';
import { ReactComponent as Circle } from '../../public/images/misc/circle.svg';
import { ReactComponent as BigCircle } from '../../public/images/misc/big-circle.svg';

export default function HighlightedProduct({ product, title, location, modalOpeningFunction }) {
  // const isLocationValid = location && location.isCityValid === true && product.globals.ecommerceLink || location && location === 'denied' && product.globals.ecommerceLink;
  const buttons = [{
    link: product.globals.ecommerceLink ? product.globals.ecommerceLink : null,
    text: 'Comprar',
    icon: true,
    color: 'secondary',
    isExternal: product.globals.ecommerceLink ? true : false,
    isFormBtn: product.globals.ecommerceLink ? false : true,
    action: product.globals.ecommerceLink ? null : modalOpeningFunction,
  }, {
    link: `/aislantes/${product.id}`,
    text: 'Conocé Más',
    icon: false,
    color: 'gray',
    isExternal: false,
  }];

  return (
    <React.Fragment>
      <li className="max-w-md order-last lg:order-first mx-auto">
        <p className={`${uppercaseTextClasses} text-gray-500 mb-4`}>{title}</p>
        <TitlePackage
          titleHierarchy="h3"
          title={product.name}
          text={product.description}
          theme="light"
          buttons={buttons}
        />
      </li>
      <li className="relative max-w-sm w-full mx-auto lg:justify-self-end">
        <Product
          product={product.globals.productImage}
          name={product.name}
          classes={`${HighlightedProductStyles.Product} mx-auto py-8`}
          decorations={false}
        />
        <Dots
          className="text-gray-500 fill-current absolute top-0 left-0 transform rotate-180"
        />
        <Circle
          className="text-gray-500 fill-current absolute top-0 right-0 transform -rotate-90"
        />
        <BigCircle
          className="text-blue-100 fill-current absolute -bottom-4 xl:inset-x-10"
        />
      </li>
    </React.Fragment>
  )
}