import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };

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
      <form
        className={css.form}
        name="ContactForm"
        onSubmit={this.handleSubmit}
      >
        <label className={css.form__label}>
          Name
          <input
            className={css.form__input}
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form__label}>
          Number
          <input
            className={css.form__input}
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
// ({ onSubmit, onChange, name, number }) =>

export default ContactForm;
