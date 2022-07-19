import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// model.id = nanoid();

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContacts = name => {
    const contact = {
      id: nanoid(),
      name,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handleChange = e => {
    console.log(e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { name } = this.state;
    console.log('Name: ' + name);
    e.preventDefault();
    this.addContacts(name);
    console.log(this.state);
    this.setState({
            name: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form name="Phonebook" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
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
        <h2>Contacts</h2>
        <ul className="Contacts__list">
          <li className="Contacts__item">Rosie Simpson</li>
        </ul>
      </div>
    );
  }
}
