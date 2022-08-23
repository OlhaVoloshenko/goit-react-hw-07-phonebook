import { InputItem } from './InputForm.styled';
import { Formik, Form } from 'formik';
import { useAddContactMutation } from 'components/ContactsApi/contactsApi';

export function InputForm({ contacts }) {
  const [addContact] = useAddContactMutation();

  const onSubmit = (values, action) => {
    const equalName = contacts.find(
      el => el.name.toLowerCase() === values.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts');

    addContact(values);
    action.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={onSubmit}>
      <Form>
        <label>
          Name
          <InputItem
            type="text"
            name="name"
            maxLength="16"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <InputItem
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
