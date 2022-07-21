import React, { Component } from 'react';
import shortid from 'shortid';

import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  //додає контакт у стейт
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
  //відслідковує зміну value(відповідного елемента за  name="?" ) , та записує в стейт;
  handleChange = e => {
    // console.log('event: ', e.currentTarget.value);
    this.setState({ [e.target.name]: e.target.value });
    console.log('event: ', e.target.name, 'VALUE:', e.target.value);
  };
  //скидає значення форми до початкового значення;
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  //викликається при сабміті;
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.addContacts(name, number);
    this.reset();
  };
  //повертає новий масив контактів, які проходять фільтр
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, name, number } = this.state;
    const visibleContacts = this.getVisibleContacts();
    console.log(visibleContacts);
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
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} value={filter} />
        <Contacts contacts={visibleContacts}></Contacts>
      </div>
    );
  }
}
