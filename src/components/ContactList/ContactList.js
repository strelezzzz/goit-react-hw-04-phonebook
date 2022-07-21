import React from 'react';

import ContactElement from 'components/ContactElement';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactElement name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
