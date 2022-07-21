import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  //скидає значення форми до початкового значення;
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  //сабміт форми та передача пропів;
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    // Проп, який передається формі для виклику під час сабміту;
    this.props.onSubmit(name, number);
    this.reset();
  };

  //відслідковує зміну value(відповідного елемента за  name="?" ) , та записує в стейт;
  handleChange = e => {
    // console.log('event: ', e.currentTarget.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form name="ContactForm" onSubmit={this.handleSubmit}>
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
    );
  }
}
// ({ onSubmit, onChange, name, number }) =>

export default ContactForm;
