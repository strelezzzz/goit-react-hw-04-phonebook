import React, { Component } from 'react';
import shortid from 'shortid';

import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: '_xIHxcBWY', name: 'Misis Y' },
      { id: '9iYuhyfxo', name: 'Mister X' },
      { id: 'YFjpf2c8o', name: 'Rosie Simpson' },
    ],
    name: '',
  };
  addContacts = name => {
    if (!name) {
      console.log('addContacts name?');
    }
    const contact = {
      id: shortid.generate(),
      name,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handleChange = e => {
    console.log('event: ', e.currentTarget.value);
    this.setState({ [e.target.name]: e.currentTarget.value });
    console.log('event: ', e.target);
  };

  reset = () => {
    this.setState({ name: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    this.addContacts(name);

    this.reset();
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form name="Phonebook" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit" className="">
            Add contact
          </button>
        </form>

        <Contacts contacts={contacts} />
      </div>
    );
  }
}
