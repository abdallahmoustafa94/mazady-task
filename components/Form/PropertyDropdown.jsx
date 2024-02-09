import React, { useState, useEffect } from 'react';
import useAxios from '@/hooks/useAxios';
import Dropdown from './Dropdown';

const PropertyDropdown = ({ property, onSelect }) => {
  const [optionsHierarchy, setOptionsHierarchy] = useState([]);
  const [optionSelected, setOptionSelected] = useState(false);

  const selectedOptionData = optionsHierarchy.length > 0 ? optionsHierarchy[optionsHierarchy.length - 1] : null;
  const { data } = useAxios(selectedOptionData ? `https://staging.mazaady.com/api/v1/get-options-child/${selectedOptionData.value}` : "");

  useEffect(() => {
    if (data && data.data) {
      setOptionsHierarchy(prevHierarchy => [...prevHierarchy, data.data]);
    }
  }, [data]);

  const renderDropdownsRecursively = (options, hierarchyIndex, onSelect) => {
    if (!Array.isArray(options) || options.length === 0) {
      return null;
    }

    return options.map((option, index) => (
      <div key={option.id}>
        {option.options && option.options.length > 0 && (
          <Dropdown
            options={option.options.map(childOption => ({ value: childOption.id, label: childOption.name }))}
            onChange={(selectedOption) => {
              setOptionsHierarchy(prevHierarchy => {
                const newHierarchy = [...prevHierarchy.slice(0, hierarchyIndex + 1), selectedOption];
                return newHierarchy;
              });
              onSelect(selectedOption);
              setOptionSelected(true);
            }}
            placeholder={`Select ${option.name}`}
          />
        )}
        {renderDropdownsRecursively(option.options, hierarchyIndex + 1, onSelect)}
      </div>
    ));
  };

  const renderMainDropdown = () => (
    property && property.options && property.options.length > 0 && (
      <Dropdown
        options={property.options.map(option => ({ value: option.id, label: option.name }))}
        onChange={(selectedOption) => {
          setOptionsHierarchy([selectedOption]);
          onSelect(selectedOption);
        }}
        placeholder={`Select ${property.name || 'Property'}`}
      />
    )
  );

  return (
    <>
      {renderMainDropdown()}
      {optionsHierarchy.map((options, index) => renderDropdownsRecursively(options, index, onSelect))}
    </>
  );
};

export default PropertyDropdown;
