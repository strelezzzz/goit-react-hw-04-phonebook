import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactElement.module.css';

const ContactElement = ({ name, number, onDeleteContact, id }) => (
  <>
    {name}: {number}
    <button
      className={css.deleteBtn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </>
);

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactElement;
