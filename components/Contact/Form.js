// Globals
import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
// import slugify from 'react-slugify';

// Components
import Select from '../Forms/Select';
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import Button from "../Forms/Button";

export default function Form({ products, ctaText }) {
  // Initialize state and refs
  const [activeType, setActiveType] = useState('consulta-tecnica');
  const [activeProduct, setActiveProduct] = useState('');
  // const [maxFileSizeMessage, setMaxFileSizeMessage] = useState('');
  // const [userProvince, setUserProvince] = useState({});
  // const [userCity, setUserCity] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const typeRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const areaCodeRef = useRef(null);
  const phoneRef = useRef(null);
  const provinceRef = useRef(null);
  const localeRef = useRef(null);
  const professionRef = useRef(null);
  const productRef = useRef(null);
  const m2Ref = useRef(null);
  const contentRef = useRef(null);
  const companyNameRef = useRef(null);
  const companyRoleRef = useRef(null);
  const companyCuitRef = useRef(null);
  const catalogueRef = useRef(null);
  const addressRef = useRef(null);

  // Populate the options for the aislantes field
  const productsInfo = [];
  products.map((product) => productsInfo.push({
    name: product.name,
    value: product.id
  }));

  // Function to check for spam submissions
  const validateRecaptcha = (value) => {
    if(value === null) {
      return;
    } else {
      setIsCaptchaValid(true);
    }
  }

  // File size check
  // const checkUploadSize = (e) => {
  //   // 200kb
  //   const maxFileSize = 209715;
  //   const fileSize = e.currentTarget.files[0].size;

  //   if(fileSize > maxFileSize) {
  //     setMaxFileSizeMessage('El archivo es muy pesado. Por favor, subí un archivo menor a 200kb.')
  //     e.currentTarget.value = '';
  //   } else {
  //     setMaxFileSizeMessage('')
  //   }
  // }

  useEffect(() => {
    // const userLocation = JSON.parse(localStorage.getItem('location'));
    const selectedType = window.location.search;

    // To get the query param and update the subject
    if(selectedType) {
      const type = selectedType.replace('?', '').split('=')[0];
      const product = selectedType.split('=')[1];
      setActiveType(type);

      if(product) {
        setActiveProduct(product);
      }
    }

    // Get the location from localStorage to populate the province and locale fields
    // if(userLocation && userLocation !== 'denied') {
    //   setUserProvince({
    //     name: userLocation.province[0].long_name,
    //     value: slugify(userLocation.province[0].long_name)
    //   });
    //   if(userLocation.city.length > 0) {
    //     setUserCity(userLocation.city[0].long_name);
    //   }
    // }
  }, []);

  return (
      <form
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8`}
        // encType={activeType === 'quiero-trabajar-en-isolant' ? 'multipart/form-data' : ''}
        method="POST"
        action={isCaptchaValid === true ? "/api/contact" : '/error'}
      >
        {/* Global fields */}
        <Select
          id="type"
          labelText="Tipo de consulta:"
          selected={activeType}
          reference={typeRef}
          options={[{
            name: 'Consulta técnica',
            value: 'consulta-tecnica'
          }, {
            name: '¿Dónde puedo comprar Isolant?',
            value: 'comprar-isolant'
          }, {
            name: 'Quiero vender Isolant en mi comercio',
            value: 'vender-isolant'
          }, {
            name: 'Quiero solicitar un catálogo',
            value: 'solicitar-catalogo'
          }, {
            name: 'Quiero que me visite un asesor técnico',
            value: 'solicitar-visita-tecnica'
          }
          // Remove from the contact form per Isolant's request
          // {
          //   name: 'Quiero trabajar en Isolant',
          //   value: 'quiero-trabajar-en-isolant'
          // }
          ]}
          classes="md:col-span-full"
          required={true}
          onChangeMethod={(e) => setActiveType(e.target.selectedOptions[0].value)}
        />
        <Input
          id="name"
          labelText="Nombre y Apellido:"
          required={true}
          reference={nameRef}
          type="text"
          placeholder="Completá tu nombre y apellido acá"
        />
        <Input
          id="email"
          labelText="Email:"
          reference={emailRef}
          required={true}
          type="email"
          placeholder="Completá tu email acá"
          validation="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="areaCode"
            labelText="Código de área:"
            reference={areaCodeRef}
            required={true}
            type="text"
            theme="light"
            placeholder="Sin el 0. Ej.: 11"
            minLength={2}
            maxLength={4}
            validation="[0-9]{2,}"
          />
          <Input
            id="phone"
            labelText="Teléfono:"
            reference={phoneRef}
            required={true}
            type="text"
            theme="light"
            placeholder="Ej.: 12341234"
            validation="[0-9]{7,}"
            minLength={7}
            maxLength={8}
          />
        </div>
        <Select
          id="province"
          reference={provinceRef}
          labelText="Provincia:"
          // selected={userProvince.value}
          options={[{
            name: 'Ciudad Autónoma de Buenos Aires',
            value: 'ciudad-autonoma-de-buenos-aires'
          }, {
            name: 'Provincia de Buenos Aires',
            value: 'provincia-de-buenos-aires'
          }, {
            name: 'Catamarca',
            value: 'catamarca'
          }, {
            name: 'Córdoba',
            value: 'cordoba'
          },
          {
            name: 'Corrientes',
            value: 'corrientes'
          },
          {
            name: 'Chaco',
            value: 'chaco'
          },
          {
            name: 'Chubut',
            value: 'chubut'
          },
          {
            name: 'Entre Ríos',
            value: 'entre-rios'
          },
          {
            name: 'Formosa',
            value: 'formosa'
          },
          {
            name: 'Jujuy',
            value: 'jujuy'
          },
          {
            name: 'La Pampa',
            value: 'la-pampa'
          },
          {
            name: 'La Rioja',
            value: 'la-rioja'
          },
          {
            name: 'Mendoza',
            value: 'mendoza'
          },
          {
            name: 'Misiones',
            value: 'misiones'
          },
          {
            name: 'Neuquén',
            value: 'neuquen'
          },
          {
            name: 'Rio Negro',
            value: 'rio-negro'
          },
          {
            name: 'Salta',
            value: 'salta'
          },
          {
            name: 'San Juan',
            value: 'san-juan'
          },
          {
            name: 'San Luis',
            value: 'san-luis'
          },
          {
            name: 'Santa Cruz',
            value: 'santa-cruz'
          },
          {
            name: 'Santa Fé',
            value: 'santa-fe'
          },
          {
            name: 'Santiago del Estero',
            value: 'santiago-del-estero'
          },
          {
            name: 'Tierra del Fuego',
            value: 'tierra-del-fuego'
          },
          {
            name: 'Tucumán',
            value: 'tucuman'
          },
          ]}
          required={true}
        />
        <Input
          id="locale"
          labelText="Localidad:"
          reference={localeRef}
          // defaultValue={userCity}
          required={true}
          type="text"
          placeholder="Completá tu localidad acá"
        />
        {/* Specific forms for each category */}
        <Select
          id="userType"
          labelText="Soy un..."
          reference={professionRef}
          options={[{
            name: 'Profesional',
            value: 'profesional'
          }, {
            name: 'Colocador',
            value: 'colocador'
          }, {
            name: 'Propietario',
            value: 'propietario'
          }, {
            name: 'Comerciante',
            value: 'comerciante'
          }, {
            name: 'Otros',
            value: 'otros'
          }]}
          required={
            activeType === 'vender-isolant' ?
              false
            :
              true
          }
          classes={
            activeType === 'vender-isolant' ?
              "hidden"
            : ''
          }
        />
        <Select
          id="product"
          labelText="Aislante"
          options={productsInfo}
          reference={productRef}
          selected={activeProduct}
          required={
            activeType === 'consulta-tecnica' ?
              true
            :
            activeType === 'comprar-isolant' ?
              true
            : false
          }
          classes={
            activeType === 'consulta-tecnica' ?
              ""
            :
            activeType === 'comprar-isolant' ?
              ""
            : 'hidden'
          }
        />
        <Input
          id="m2"
          labelText="M2 de la obra:"
          reference={m2Ref}
          type="number"
          placeholder="Completá los m2 de tu obra acá"
          min="0"
          required={
            activeType === 'consulta-tecnica' ?
              true
            :
            activeType === 'comprar-isolant' ?
              true
            : false
          }
          classes={
            activeType === 'consulta-tecnica' ?
              ""
            :
            activeType === 'comprar-isolant' ?
              ""
            : 'hidden'
          }
        />
        <Input
          id="razon-social"
          labelText="Razón Social de la empresa:"
          reference={companyNameRef}
          type="text"
          placeholder="Completá la razón social de tu empresa acá"
          required={
            activeType === 'vender-isolant' ? true : false
          }
          classes={
            activeType === 'vender-isolant' ? "" : "hidden"
          }
        />
        <Input
          id="cuit"
          labelText="CUIT de la empresa:"
          reference={companyCuitRef}
          type="number"
          placeholder="Completá el CUIT de tu empresa acá"
          min="0"
          required={
            activeType === 'vender-isolant' ? true : false
          }
          classes={
            activeType === 'vender-isolant' ? "" : "hidden"
          }
        />
        <Select
          id="rubro"
          labelText="Rubro de la empresa:"
          reference={companyRoleRef}
          options={[
            {
              name: 'Corralón',
              value: 'corralon'
            },
            {
              name: 'Maderera',
              value: 'maderera'
            },
            {
              name: 'Climatización',
              value: 'climatizacion'
            },
            {
              name: 'Construcción en seco',
              value: 'construccion-en-seco'
            },
            {
              name: 'Aislaciones industriales',
              value: 'aislaciones-industriales'
            },
            {
              name: 'Sanitarista',
              value: 'sanitarista'
            },
            {
              name: 'Otro',
              value: 'otro'
            },
          ]}
          required={
            activeType === 'vender-isolant' ? true : false
          }
          classes={
            activeType === 'vender-isolant' ? "" : "hidden"
          }
        />
        <Select
          id="catalogue"
          labelText="Catálogo a solicitar:"
          reference={catalogueRef}
          options={[
            {
              name: 'Vivienda',
              value: 'vivienda'
            },
            {
              name: 'Galpones y Tinglados',
              value: 'galpones-y-tinglados'
            },
            {
              name: 'Construcción en Seco',
              value: 'construccion-en-seco'
            },
            {
              name: 'Pisos',
              value: 'pisos'
            },
            {
              name: 'Sistemas de Climatización',
              value: 'climatizacion'
            },
            {
              name: 'Otras necesidades',
              value: 'otros-usos'
            },
            {
              name: 'Manual de colocación',
              value: 'manual-de-colocacion'
            },
          ]}
          required={
            activeType === 'solicitar-catalogo' ? true : false
          }
          classes={
            activeType === 'solicitar-catalogo' ? "" : "hidden"
          }
        />
        <Input
          id="address"
          labelText="Dirección:"
          reference={addressRef}
          required={
            activeType === 'solicitar-catalogo' ? true : false
          }
          type="text"
          placeholder="Completá tu dirección acá"
          classes={
            activeType === 'solicitar-catalogo' ? "" : "hidden"
          }
        />
        {/* <Input
          id="cv"
          labelText="CV:"
          required={
            activeType === 'quiero-trabajar-en-isolant' ? true : false
          }
          type="file"
          placeholder="Cargá tu CV acá"
          validationMessage={maxFileSizeMessage}
          classes={
            activeType === 'quiero-trabajar-en-isolant' ? "" : "hidden"
          }
          onChangeMethod={(e) => checkUploadSize(e)}
        /> */}
        <Textarea
          id="message"
          labelText="Mensaje:"
          reference={contentRef}
          required={true}
          placeholder="Completá tu mensaje acá"
          classes="md:col-span-full"
        />
        <div className="md:col-span-full">
          <ReCAPTCHA
            sitekey="6Lc5d-kUAAAAADvGQo7UZFKtnmKPImwDSnRndmOS"
            onChange={validateRecaptcha}
          />
        </div>
        <div>
          <Button
            text={ctaText}
            color={'secondary'}
            isFormBtn={true}
            icon={true}
          />
        </div>
      </form>
  )
}