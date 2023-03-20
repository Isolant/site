// Globals
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Button from '../Forms/Button';
import Select from '../Forms/Select';
import DropdownMenu from '../Header/DropdownMenu';
import Search from '../Search/index';

// Classes
import { horizontalPadding } from '../../classes/Spacing';

// SVGs
import { ReactComponent as LogoWhite } from "../../images/logos/logo-white.svg";
import { ReactComponent as LogoColor } from "../../images/logos/logo.svg";
import { ReactComponent as IsoplusLogoWhite } from "../../images/logos/logo-isoplus-white.svg";
import { ReactComponent as IsoplusLogoColor } from "../../images/logos/logo-isoplus.svg";

// Icons
import { ReactComponent as HamburgerIcon } from "../../images/icons/hamburger.svg";
import { ReactComponent as SearchIcon } from "../../images/icons/search.svg";
import { ReactComponent as TopArrow } from "../../images/icons/arrow-up.svg";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";
import { ReactComponent as WhatsappIcon } from "../../images/icons/whatsapp.svg";


export default function ProfessionalsHeader({ 
  productLines,
  activeHeader
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [userType, setUserType] = useState();
  const router = useRouter();

  const handleScroll= () => {
    const offset=window.scrollY;
    
    if(offset > 200 ){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const storeUserType = (type) => {
    if(type === userType) return;

    if(userType === 'owners') {
      localStorage.setItem('userType', 'professionals');
      setUserType('professionals');
      router.push('/profesionales');
    } else {
      localStorage.setItem('userType', 'owners');
      setUserType('owners');
      router.push('/');
    }
  }

  useEffect(() => {
    setUserType(activeHeader);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [activeHeader]);

  return (
    <React.Fragment>
      <header className="relative">
        <nav className={`${scrolled ? 'sm:py-2 bg-white shadow-sm' : ''} ${horizontalPadding} py-4 sm:py-8 w-full flex flex-row items-center fixed top-0 z-20`}>
          <Link href="/">
            <a className="hover:opacity-90 flex-1">
              {scrolled ?
                <LogoColor />
                :
                <LogoWhite />
              }
            </a>
          </Link>
          <ul
            className="flex items-center"
          >
            {userType === 'professionals' &&
              <li className="mr-4 hidden sm:block">
                <a
                  href="https://isoplus.isolant.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                >
                  {scrolled ?
                    <IsoplusLogoColor className="max-h-5" />
                    :
                    <IsoplusLogoWhite className="max-h-5" />
                  }
                </a>
              </li>
            }
            <li className="mx-2 hidden sm:block">
              <Button
                href="https://tienda.isolant.com.ar/"
                text="Comprar"
                color="primary"
                isExternal={true}
              />
            </li>
            <li className="mx-2 hidden sm:block">
              <Select
                id="userType"
                labelText="Estás en:"
                theme="custom"
                scrolled={scrolled}
                required={true}
                placeholder={userType === 'owners' ? 'Dueños e inquilinos' : 'Profesionales'}
                options={[
                  {
                    name: userType === 'owners' ? "Profesionales" : "Dueños e inquilinos",
                    value: userType === 'owners' ? "professionals" : "owners",
                  }
                ]}
                onChangeMethod={() => storeUserType(userType === 'owners' ? 'professionals' : 'owners')}
              />
            </li>
            <li className="mx-4 flex items-center hover:opacity-80">
              <button
                className="cursor-pointer p-0"
              >
                {isOpen === false ?
                  <HamburgerIcon
                    className={`${ scrolled ? 'text-gray-500' : 'text-white' } fill-current`}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  :
                  <CloseIcon
                    className={`${ scrolled ? 'text-gray-500' : 'text-white' } fill-current`}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                }
              </button>
            </li>
            <li className="ml-4 flex items-center hover:opacity-80">
              <button
                className="cursor-pointer p-0"
                onClick={() => setSearchIsOpen(!searchIsOpen)}
              >
                <SearchIcon className={`${ scrolled ? 'text-gray-500' : 'text-white' } fill-current`} />
              </button>
            </li>
            {scrolled &&
              <li className="hidden sm:block ml-4 flex items-center hover:opacity-80">
                <a href="#top" className={`flex items-center`}>
                  <TopArrow className="text-gray-500 fill-current ml-2" />
                </a>
              </li>
            }
            <li className="ml-4 flex items-center hover:opacity-80">
              <a href="https://wa.me/5491124930555" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className={`${ scrolled ? 'text-gray-500' : 'text-white' } fill-current stroke-current ml-2`} />
              </a>
            </li>
          </ul>
        </nav>
        {isOpen &&
          <React.Fragment>
            <div
              className="bg-gray-700 opacity-60 w-full h-screen fixed z-20 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div
              className={`h-8 w-8 transform rotate-45 fixed bg-white right-16 md:right-20 xl:right-28 z-20 ${scrolled ? 'top-20' : 'top-16 sm:top-24'}`}
            />
            <DropdownMenu
              scrolled={scrolled}
              productLines={productLines}
              activeHeader={userType}
              userType={userType}
              storeUserType={storeUserType}
            />
          </React.Fragment>
        }
      </header>
      {searchIsOpen &&
        <React.Fragment>
          <CloseIcon
            className={`absolute right-6 top-8 z-30 text-white fill-current`}
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