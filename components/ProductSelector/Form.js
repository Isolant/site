// Globals
import React, {useState, useRef} from "react";
import slugify from 'react-slugify';

// Components
import Select from '../Forms/Select';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

// Classes
import { boldTitleClasses, standardTextClasses } from "../../classes/Text";
import { horizontalPadding } from "../../classes/Spacing";

export default function ProductSelectorForm({ theme, formTitle, formDescription, formCtaText, ctaIcon, productSelectorTypes }) {
  // Initialize state and refs
  const [categoryContent, setCategoryContent] = useState([{}]);
  const [typologyContent, setTypologyContent] = useState([{}]);
  const typeRef = useRef(null);
  const categoryRef = useRef(null);
  const m2Ref = useRef(null);
  const typologyRef = useRef(null);
  const areaCodeRef = useRef(null);
  const phoneRef = useRef(null);

  // To populate types on the form
  const typesArray = [];
  productSelectorTypes.map(type => typesArray.push(type.productSelectorTypeTitle));
  const uniqueTypes = [...new Set(typesArray)];
  const typeOptions = [];
  uniqueTypes.map(type => typeOptions.push({
    order: type !== undefined && type.includes('Techo') ? 1 : type !== undefined && type.includes('Muro') ? 2 : type !== undefined && type.includes('Cielorraso') ? 3 : type !== undefined && type.includes('Piso') ? 4 : type !== undefined && type.includes('climatización') ? 5 : '',
    name: type,
    value: type
  }));
  typeOptions.push({
    name: 'Otro',
    value: 'Otro',
    order: 6
  });
  typeOptions.sort((a,b) => a.order - b.order);

  // To set the category based on the selected option
  const filterCategoryContent = () => {
    const types = productSelectorTypes.filter(type => type.productSelectorTypeTitle === typeRef.current.value);
    const categories = [];
    types.map(category => categories.push({
      name: category.productSelectorTypeTypology,
      value: category.productSelectorTypeTypology,
      order: category.productSelectorTypeTypology.includes('Galpón') ? 1 : category.productSelectorTypeTypology.includes('Vivienda') ? 2 : category.productSelectorTypeTypology.includes('Edificio') ? 3 : category.productSelectorTypeTypology.includes('Departamento') ? 4 : '',
    }));
    setCategoryContent(categories);
    categories.push({
      name: 'Otro',
      value: 'Otro',
      order: 5
    });
    categories.sort((a,b) => a.order - b.order);
  }

  // To get the typology options
  const filterTypologyContent = () => {
    const typologies = [];
    const selectedOption = productSelectorTypes.filter(type => type.productSelectorTypeTitle === typeRef.current.value && type.productSelectorTypeTypology === categoryRef.current.value);
    const solutions = selectedOption[0] ? selectedOption[0].solutions : selectedOption.solutions;

    if(solutions !== undefined) {
      solutions.map(solution => typologies.push({
        name: solution,
        value: slugify(solution),
      }))
    } else {
      typologies.push({
        name: 'Otro',
        value: 'otro'
      });
    }

    setTypologyContent(typologies);
  }

  // To handle the form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Gather the information and store it on localStorage
    const selectedOption = {
      type: typeRef.current.value,
      category: categoryRef.current.value,
      m2: m2Ref.current.value,
      typology: typologyRef.current.value,
      phone: `549${areaCodeRef.current.value}${phoneRef.current.value}`
    };
    localStorage.setItem('productSelectorOption', JSON.stringify(selectedOption));

    e.target.submit();
  }

  return (
    <React.Fragment>
      <div className={`${horizontalPadding} relative xl:absolute container mt-4 lg:mt-0 py-4 lg:py-24 lg:pb-0 lg:right-0 w-full`}>
        <div className={`${theme === 'light' ? '' : 'bg-gray-800 p-4 xl:p-8'} rounded-md`}>
          <div>
            <h2
              className={`${boldTitleClasses} ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
            >
              {formTitle}
            </h2>
            <p 
              className={`${standardTextClasses} text-gray-400 mt-2 sm:lg-4`}
            >
              {formDescription}
            </p>
          </div>
          <form
            className="mt-4 xl:mt-8"
            action="/api/product-selector"
            method="POST"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <ul
              className="col-span-full grid grid-cols-1 lg:grid-cols-2 items-center gap-y-4 lg:gap-4"
            >
              <li>
                <Select
                  id="type"
                  labelText="Necesito aislar el:"
                  reference={typeRef}
                  options={typeOptions}
                  onChangeMethod={() => filterCategoryContent()}
                  required={true}
                  theme="light"
                />
              </li>
              <li>
                <Select
                  id="category"
                  labelText="De mi:"
                  reference={categoryRef}
                  options={categoryContent}
                  onChangeMethod={() => filterTypologyContent()}
                  required={true}
                  theme="light"
                />
              </li>
              <li>
                <Select
                  id="typology"
                  labelText="Tipología constructiva:"
                  reference={typologyRef}
                  options={typologyContent}
                  required={true}
                  theme="light"
                />
              </li>
              <li>
                <Select
                  id="m2"
                  labelText="m2 (aproximados):"
                  reference={m2Ref}
                  required={true}
                  theme="light"
                  placeholder="Elegí una opción"
                  options={[
                    {
                      name: "Hasta 80m2",
                      value: "hasta-80"
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
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:col-span-2">
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
              </li>
            </ul>
            <div className="text-center mt-4">
              <Button
                text={formCtaText}
                color={'secondary'}
                isFormBtn={true}
                icon={ctaIcon}
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}