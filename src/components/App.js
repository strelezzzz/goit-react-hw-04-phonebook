import React, { Component } from 'react';
import shortid from 'shortid';

import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: '_xIHxcBWY', name: 'Misis Y', number: '44-22' },
      { id: '9iYuhyfxo', name: 'Mister X', number: '44-11' },
      { id: 'YFjpf2c8o', name: 'Rosie Simpson', number: '44-00' },
    ],
    name: '',
    number: '',
  };
  addContacts = (name, number) => {
    if (!name) {
      console.log('addContacts name?');
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handleChange = e => {
    // console.log('event: ', e.currentTarget.value);
    this.setState({ [e.target.name]: e.target.value });
    console.log('event: ', e.target.name);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.addContacts(name, number);
    this.reset();
  };

  render() {
    const { name, number, contacts } = this.state;

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
          <label>
            Number
            <input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
