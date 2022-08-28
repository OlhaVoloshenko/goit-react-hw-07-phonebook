import { InputItem } from './InputForm.styled';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'Redux/contactsApi';

export const InputForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'phone':
        setPhone(evt.target.value);
        break;

      default:
        console.log('Wrong field name');
        break;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    const normalizeName = name.toLowerCase();
    const isExist = contacts
      .map(contact => contact.name)
      .some(name => name.toLowerCase() === normalizeName);

    if (isExist) {
      alert(`${name} is already in contacts.`);

      return;
    }

    addContact({ name, phone });

    setName('');
    setPhone('');
  };

  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <InputItem
            type="text"
            name="name"
            maxLength="16"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <InputItem
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
