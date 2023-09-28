import React, { useState } from "react";
import Link from "next/link";

import DropdownMenu from './Header/DropdownMenu';
import Socials from './Header/Socials';
import Search from './Search/index';

import { uppercaseTextClasses } from '../classes/Text';
import { horizontalPadding } from '../classes/Spacing';

import { ReactComponent as LogoColor } from "../public/images/logos/logo.svg";

import { ReactComponent as HamburgerIcon } from "../public/images/icons/hamburger.svg";
import { ReactComponent as CartIcon } from "../public/images/icons/cart.svg";
import { ReactComponent as SearchIcon } from "../public/images/icons/search.svg";
import { ReactComponent as CloseIcon } from "../public/images/icons/close.svg";


export default function Header({ 
  productLines,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <React.Fragment>
      <header className="relative">
        <nav className={`bg-white shadow-sm ${horizontalPadding} py-2 sm:py-4 w-full flex flex-row items-center fixed top-0 z-30`}>
          {/* Logo */}
          <Link href="/">
            <a className="hover:opacity-90 flex-1">
              <LogoColor />
            </a>
          </Link>
          {/* Menu */}
          <ul
            className="flex items-center gap-4 sm:gap-6"
          >
            <li
              className={`hidden sm:block hover:opacity-80 ${uppercaseTextClasses} text-gray-500`}
            >
              <Link
                href="/contacto"
              >
                contactanos
              </Link>
            </li>
            <li className="flex items-center hover:opacity-80">
              <a
                href="https://tienda.isolant.com.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CartIcon className="text-gray-500 fill-current" />
              </a>
            </li>
            <li className="flex items-center hover:opacity-80">
              <button
                className="cursor-pointer p-0"
                onClick={() => setSearchIsOpen(!searchIsOpen)}
              >
                <SearchIcon className="text-gray-500 fill-current" />
              </button>
            </li>
            <li className="flex items-center hover:opacity-80">
              <button
                className="cursor-pointer p-0"
              >
                <HamburgerIcon
                  className="text-gray-500 fill-current"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </button>
            </li>
          </ul>
        </nav>
        {isOpen &&
          <React.Fragment>
            <div
              className="bg-gray-700 opacity-60 w-full h-screen fixed z-30 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div
              className="h-8 w-8 transform rotate-45 fixed bg-white right-[60px] z-30 top-[70px] hidden sm:block"
            />
            <DropdownMenu
              productLines={productLines}
            />
          </React.Fragment>
        }
        {/* Social networks */}
        <Socials />
      </header>
      {/* Search */}
      {searchIsOpen &&
        <React.Fragment>
          <CloseIcon
            className={`absolute right-6 top-7 z-30 text-white fill-current`}
            onClick={() => setSearchIsOpen(!searchIsOpen)}
          />
          <div
            className="bg-gray-700 opacity-60 w-full h-screen fixed z-20 cursor-pointer"
            onClick={() => setSearchIsOpen(!searchIsOpen)}
          />
          <Search />
        </React.Fragment>
      }
    </React.Fragment>
  )
}