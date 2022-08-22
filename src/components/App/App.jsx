//import { useSelector } from 'react-redux';
import { Title } from './App.styled';
import { InputForm } from 'components/InputForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { PhonebookBox } from 'components/Phonebook/Phonebook.styled';
import { InputFormBox } from 'components/InputForm/InputForm.styled';
import { ContactListBox } from 'components/ContactList/ContactList.styled';

export const App = () => {
  //const contacts = useSelector(store => store.contacts.items);
  /* const contactsFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = contactsFilter.toLowerCase();
  const filteredContacts = name.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );*/

  return (
    <PhonebookBox>
      <InputFormBox>
        <Title>Phonebook</Title>
        <InputForm />
      </InputFormBox>
      <ContactListBox>
        <Filter />
        <ContactList />
      </ContactListBox>
    </PhonebookBox>
  );
};
