import { React } from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filter__label}>
    Find contacts by name
    <input
      className={css.filter__input}
      name="filter"
      placeholder="Enter text here"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
