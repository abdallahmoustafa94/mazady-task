import React from 'react';
import Select from 'react-select';

const Dropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      isSearchable
      className='mt-6'
    />
  );
};

export default Dropdown;
