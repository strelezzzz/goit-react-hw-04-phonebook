import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
