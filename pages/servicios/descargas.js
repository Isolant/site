// Globals
import React from "react";

// Components
import Base from "../../components/Base";
import TitlePackage from "../../components/TitlePackage";
import SecondaryDownloadCard from "../../components/Cards/SecondaryDownloadCard";
import TechnicalInformationForm from "../../components/Services/TechnicalInformationForm";

// Library
import { getAllCollections, getCollectionById } from '../../lib/collections';

// Classes
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { boldSubtitleClasses } from "../../classes/Text";

// Content
import { attributes } from "../../content/services/downloads.md";

export default function Downloads({ provincesData, localesData, downloadsData, productLinesData, productsData }) {
  // Sort all downloads using arrays for each one.
  // WIP: Make this less repetitive
  const viviendaDownloads = [];
  const galponesDownloads = [];
  const construccionSecoDownloads = [];
  const pisosDownloads = [];
  const climatizacionDownloads = [];
  const otrosUsosDownloads = [];
  const manualDownloads = [];
  const bimDownloads = [];
  const otrosDownloads = [];
  const instructionDownloads = [];

  viviendaDownloads.push(downloadsData.filter(downloads => downloads.productLines && downloads.productLines.find(productLine => productLine === 'Vivienda')));
  galponesDownloads.push(downloadsData.filter(downloads => downloads.productLines && downloads.productLines.find(productLine => productLine === 'Galpones y Tinglados')));
  construccionSecoDownloads.push(downloadsData.filter(downloads => downloads.productLines && downloads.productLines.find(productLine => productLine === 'Construcción en seco')));
  pisosDownloads.push(downloadsData.filter(downloads => downloads.productLines && downloads.productLines.find(productLine => productLine === 'Pisos')));
  climatizacionDownloads.push(downloadsData.filter(downloads => downloads.productLines && downloads.productLines.find(productLine => productLine === 'Sistemas de Climatización')));
  otrosUsosDownloads.push(downloadsData.filter(downloads => downloads.productLines && downloads.productLines.find(productLine => productLine === 'Accesorios')));
  manualDownloads.push(downloadsData.filter(downloads => downloads.downloadCategory && downloads.downloadCategory === 'Manual de Colocación'));
  otrosDownloads.push(downloadsData.filter(downloads => downloads.downloadCategory && downloads.downloadCategory === 'Otros'));
  bimDownloads.push(downloadsData.filter(downloads => downloads.downloadCategory && downloads.downloadCategory === 'Isolant BIM'));
  instructionDownloads.push(downloadsData.filter(downloads => downloads.downloadCategory && downloads.downloadCategory === 'Instrucciones de colocación'));

  let {
    pageTitle,
    downloadsTitle,
    downloadsText,
    downloadsFormTitle,
    downloadsFormText
  } = attributes;

  return (
    <Base
      activePage="professionals"
      footerTheme="light"
      pageTitle={pageTitle}
      provinces={provincesData.provinces}
      locales={localesData.locales}
      footerDecorations={true}
      productLines={productLinesData}
    >
      <section
        className={`${horizontalPadding} ${verticalPadding}`}
        style={{ backgroundImage: `url(/images/globals/isolant-aislantes-fondo-lineas-oscuras.jpg)`}}
      >
        <div className={`${verticalPadding} container mx-auto`}>
          <div className="max-w-md mx-auto text-center">
            <TitlePackage
              titleHierarchy="h1"
              title={downloadsTitle}
              text={downloadsText}
              theme="dark"
            />
          </div>
          {viviendaDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
            <ul
              className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
              id="vivienda"
            >
              <li className="col-span-full">
                <h2 className={`${boldSubtitleClasses} text-white`}>
                  Aislantes para Vivienda
                </h2>
              </li>
              {viviendaDownloads[0]
                .filter(download => download.showOnMainPage === true)
                .map((download, index) => {
                return(
                  <li
                    key={index}
                  >
                    <SecondaryDownloadCard
                      download={download}
                    />
                  </li>
                )
              })}
            </ul>
          }
          {galponesDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="galpones-y-tinglados"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Aislantes para Galpones y Tinglados
              </h2>
            </li>
            {galponesDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {construccionSecoDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="construccion-en-seco"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Aislantes para Construcci&oacute;n en seco
              </h2>
            </li>
            {construccionSecoDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {pisosDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="pisos"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Aislantes para Pisos
              </h2>
            </li>
            {pisosDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {climatizacionDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="climatizacion"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Aislantes para Sistemas de Climatizaci&oacute;n
              </h2>
            </li>
            {climatizacionDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {otrosUsosDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="otros-usos"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Accesorios
              </h2>
            </li>
            {otrosUsosDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {instructionDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="instrucciones-colocacion"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Instrucciones de Colocaci&oacute;n
              </h2>
            </li>
            {instructionDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {manualDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="manual-de-colocacion"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Manual de Colocaci&oacute;n
              </h2>
            </li>
            {manualDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {bimDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
            id="bim"
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Isolant BIM
              </h2>
            </li>
            {bimDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
          {otrosDownloads[0].filter(download => download.showOnMainPage === true).length > 0 &&
          <ul
            className={`pt-12 sm:pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
          >
            <li className="col-span-full">
              <h2 className={`${boldSubtitleClasses} text-white`}>
                Otros
              </h2>
            </li>
            {otrosDownloads[0]
              .filter(download => download.showOnMainPage === true)
              .map((download, index) => {
              return(
                <li
                  key={index}
                >
                  <SecondaryDownloadCard
                    download={download}
                  />
                </li>
              )
            })}
          </ul>
          }
        </div>
      </section>
      <TechnicalInformationForm
        title={downloadsFormTitle}
        text={downloadsFormText}
        products={productsData}
      />
    </Base>
  )
}

export async function getStaticProps() {
  const productsData = getAllCollections("products");
  const provincesData = getCollectionById("geolocalization", 'provinces');
  const localesData = getCollectionById("geolocalization", 'locales');
  const downloadsData = getAllCollections("downloads");
  const productLinesData = getAllCollections("productLines");

  return {
    props: {
      provincesData,
      localesData,
      downloadsData,
      productLinesData,
      productsData
    },
  };
}
