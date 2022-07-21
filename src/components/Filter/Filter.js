import { React } from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      name="filter"
      placeholder="Enter text here"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
