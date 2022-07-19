import React, { Component } from 'react';
import shortid from 'shortid';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContacts = name => {
    if (!name) { console.log("were is the name?") }
    const contact = {
      id: shortid.generate(),
      name,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handleChange = e => {
    console.log(e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    const { name } = this.state;
    console.log('Name: ' + name);
    e.preventDefault();
    this.addContacts(name);
    console.log(this.state);
    this.reset();
    
  };

  reset = () => {
    this.setState({name:''})
  }

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
