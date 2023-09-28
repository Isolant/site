// Globals
import React from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';

// Components
import TitlePackage from '../components/TitlePackage';
import ProductSelectorForm from './ProductSelector/Form';

// Content
import { attributes } from "../content/productSelector/form.md";

// Styles
import HeroStyles from './Hero.module.css';

// Classes
import { horizontalPadding } from "../classes/Spacing";

export default function Hero({ 
  videoBackground,
  imageBackground,
  imageBackgroundMobile,
  logo,
  title,
  text,
  buttons,
  showForm,
  productSelectorTypes,
  fullHeight,
  activePage
}) {

  let {
    formTitle,
    formDescription,
    formCtaText
  } = attributes;

  const router = useRouter();
  const url = router.pathname;

  return (
    <section
      className={`${HeroStyles.Container} relative lg:flex lg:items-center lg:flex-row ${!showForm && 'pb-6'} ${fullHeight === true && 'min-h-screen'}`}
    >
      {videoBackground !== undefined && videoBackground !== "" ?
        <React.Fragment>
          <div
            className={`overflow-hidden bg-gray-800 aspect-w-2 aspect-h-2 lg:aspect-w-16 lg:aspect-h-9 2xl:aspect-w-4 2xl:aspect-h-1 absolute lg:relative w-full ${imageBackgroundMobile && 'hidden lg:block'}`}
          >
            <iframe 
              src={`https://www.youtube.com/embed/${videoBackground.substring(32)}?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&playlist=${videoBackground.substring(32)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`w-full h-full pointer-events-none opacity-40`}
            ></iframe>
          </div>
          {imageBackgroundMobile &&
            <div
              className={`
                block lg:hidden
                w-full h-full overflow-hidden absolute
                bg-gray-800
              `}
            >
              <Image
                src={imageBackgroundMobile}
                alt={title}
                className={`opacity-40 w-full h-full object-cover`}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          }
        </React.Fragment>
        :
        <div
          className={`
            ${!showForm && 'lg:relative 2xl:max-h-screen'}
            bg-gray-800 w-full h-full overflow-hidden absolute
          `}
        >
          <div className={imageBackgroundMobile && 'hidden lg:block'}>
            <Image
              src={imageBackground}
              alt={title}
              className={`opacity-40 w-full h-full`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {imageBackgroundMobile &&
            <div className="block lg:hidden">
              <Image
                src={imageBackgroundMobile}
                alt={title}
                className={`opacity-40 w-full h-full object-cover`}
                layout="fill"
                objectFit="cover"
                objectPosition={activePage && activePage === 'owners' || activePage === 'professionals' ? 'right' : ''}
              />
            </div>
          }
        </div>
      }
      <div className={`${horizontalPadding} relative container xl:absolute z-10 lg:max-w-lg xl:max-w-xl pt-24 sm:pt-32 lg:pt-0`}>
        {logo ?
          <div className="w-32 mb-4">
            {logo}
          </div>
          : ''
        }
        <TitlePackage
          titleHierarchy="h1"
          additionalTitleClasses={HeroStyles.Title}
          title={title}
          text={text}
          buttons={buttons}
          theme="dark"
        />
      </div>
      {showForm && 
        <ProductSelectorForm
          formTitle={formTitle}
          formDescription={formDescription}
          formCtaText={formCtaText}
          ctaIcon={false}
          productSelectorTypes={productSelectorTypes}
        />
      }
    </section>
  )
}