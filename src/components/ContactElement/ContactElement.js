import React from 'react';

const ContactElement = ({ name, number, onDeleteContact, id }) => (
  <>
    {name}: {number}
    <button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </>
);

export default ContactElement;
