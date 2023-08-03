// Globals
import React, { useState } from "react";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";
import { boldSubtitleClasses, standardTextClasses, uppercaseTextClasses } from "../../classes/Text";

// Components
import Select from '../Forms/Select';
import TitlePackage from "../TitlePackage";

// Styles
import TechnicalAssessorsStyle from './TechnicalAssessors.module.css';

export default function TechnicalAssessors({ 
  title,
  text,
  provinces,
}) {
  const [province, setProvince] = useState();
  const [location, setLocation] = useState();
  const [technicalAssessor, setTechnicalAssessor] = useState();
  const sortedProvinces = [];
  provinces.Table && provinces.Table.map(province => sortedProvinces.push({
    name: province.nm_provincia,
    value: province.cd_provincia
  }))
  
  const getLocation = async (e) => {
    setTechnicalAssessor(undefined);
    const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex];
    const locations = await fetch(`https://apps-isolant.somee.com/mobile/api/ws/getLocalidades?email=app@isolant&provincia=${selectedOption.value}`);
    const locationsResult = await locations.json([]);
    const sortedLocations = [];
    locationsResult && locationsResult.Table.map(location => sortedLocations.push({
      name: location.nm_localidad,
      value: location.cd_localidad,
      technicalAssessor: {
        id: location.cd_asesor,
        name: location.nm_asesor,
        email: location.nm_email
      }
    }));
    
    setProvince(selectedOption.label);
    setLocation(sortedLocations);
  }

  const getTechnicalAssessor = (e) => {
    const value = e.currentTarget.options[e.currentTarget.selectedIndex].value;
    const result = location.find(location => location.value === value);
    setTechnicalAssessor(result);
  }

  return (
    <section
      className={`${verticalPadding} ${horizontalPadding} bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: `url(/images/services/isolant-aislantes-servicios-mapa-asesores-tecnicos.jpg)`}}
    >
      <div className="mx-auto container grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-screen items-center">
        <div>
          <TitlePackage
            titleHierarchy="h2"
            title={title}
            text={text}
            theme="light"
            additionalTitleClasses={TechnicalAssessorsStyle.Title}
          />
          <Select
            id="provinces"
            labelText="Provincia:"
            required={true}
            options={sortedProvinces}
            onChangeMethod={getLocation}
            classes="my-8"
          />
          <Select
            id="locations"
            labelText="Localidad:"
            required={true}
            options={location}
            onChangeMethod={getTechnicalAssessor}
          />
        </div>
        {technicalAssessor &&
          <div className="md:col-span-2 justify-self-center w-full max-w-sm order-first lg:order-last">
            <p className={`${uppercaseTextClasses} text-gray-400 mb-2`}>
              Tu asesor t&eacute;cnico es:
            </p>
            <div className="bg-white rounded-md p-4">
              <p
                className={`${uppercaseTextClasses} text-gray-500`}
              >
                {technicalAssessor.name.trim()}, {province}
              </p>
              <h3
                className={`${boldSubtitleClasses} text-gray-900 lg:my-1`}
              >
                {technicalAssessor.technicalAssessor.name}
              </h3>
              <a 
                href={`mailto:${technicalAssessor.technicalAssessor.email}`}
                className={`${standardTextClasses} text-primary hover:opacity-80`}
              >
                  {technicalAssessor.technicalAssessor.email}
              </a>
            </div>
          </div>
        }
      </div>
    </section>
  )
}

