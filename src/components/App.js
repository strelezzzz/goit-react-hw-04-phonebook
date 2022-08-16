import { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import css from './App.module.css';
//
export const App = () => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState('');

  //перевіряє чи є такий контакт у списку
  const chekContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const addContacts = (name, number) => {
    //перевірка чи є ім'я у списку(метод Find повертає undefined, якщо не виконується умова)
    if (chekContact(name)) {
      return alert(`${name} is already in contacts.`);
    }
    //створюємо контакт
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    //записуємо контакт у масив
    setContacts(prevState => [contact, ...prevState]);
  };

  //delete contact
  const deleteContact = itemId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== itemId)
    );
  };

  //відслідковує зміну value, та записує в стейт;
  const filterChange = e => {
    // console.log('event: ', e.currentTarget.value);
    setFilter(e.target.value);
  };

  //повертає новий масив obj - контактів, які проходять фільтр
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2 className={css.title}>Contacts</h2>
      <Filter onChange={filterChange} value={filter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
//========================>
// export class oldApp extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   // записуємо в локалСторейдж контакти , при умові що масив контактів змінився
//   componentDidUpdate(prevProps, prevState) {
//     // console.log('prevState:', prevState.contacts);
//     // console.log('this.state', this.state.contacts);
//     if (this.state.contacts !== prevState.contacts) {
//       // console.log('оновились контакти');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   //записуємо в стейт контакти, при умові якщо вони є в локалСторейдж
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     // console.log(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   //додає контакт у стейт
//   addContacts = (name, number) => {
//     //перевірка чи є ім'я у списку(метод Find повертає undefined, якщо не виконується умова)
//     if (this.chekContact(name)) {
//       return alert(`${name} is already in contacts.`);
//     }
//     //створюємо контакт
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     //записуємо контакт у масив
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };
//   //delete contact
//   deleteContact = itemId => {
//     this.setState(prevState => ({
//       contacts: [
//         ...prevState.contacts.filter(contact => contact.id !== itemId),
//       ],
//     }));
//   };
//   //відслідковує зміну value(відповідного елемента за  name="?" ) , та записує в стейт;
//   handleChange = e => {
//     // console.log('event: ', e.currentTarget.value);
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   //повертає новий масив obj - контактів, які проходять фільтр
//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   //перевіряє чи є такий контакт у списку
//   chekContact = name => {
//     const { contacts } = this.state;
//     return contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div className={css.container}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContacts} />
//         <h2 className={css.title}>Contacts</h2>
//         <Filter onChange={this.handleChange} value={filter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
