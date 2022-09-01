// Globals
import React from "react";

// Components
import { uppercaseTextClasses } from '../../classes/Text';
import { horizontalPadding } from '../../classes/Spacing';

// Styles
import FooterStyles from '../Footer.module.css';

export default function LandingPageFooter({ theme }) {
  return (
    <footer
      className={`
        ${horizontalPadding} py-4 sm:py-8
        ${theme === 'light' ? 'bg-white' : `bg-no-repeat bg-cover ${FooterStyles.DarkFooter}`}
      `}
    >
      <section className="flex flex-col sm:flex-row sm:items-center container mx-auto">
        <p
          className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-300'} flex-1 ${uppercaseTextClasses}`}
        >
          Copyright &copy; {new Date().getFullYear()} Isolant Aislantes S.A. Designed &amp; Developed by 
          <a
            href="https://juangarcia.design"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline hover:no-underline"
          >
              JMG
          </a>.
        </p>
        <a 
          className={`hover:no-underline underline mt-2 sm:mt-0 ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'} ${uppercaseTextClasses}`}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.isolant.somee.com/plataforma/"
        >
          Acceso Clientes
        </a>
      </section>
    </footer>
  )
}