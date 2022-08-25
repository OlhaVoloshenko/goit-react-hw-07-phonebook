import { useState } from 'react';
import { useGetContactsQuery } from 'Redux/contactsApi';

import { InputForm } from 'components/InputForm';
import { Filter } from 'components/Filter/';
import { ContactList } from 'components/ContactList';
import { Title } from './App.styled';
import {
  PhonebookBox,
  ContactListBox,
} from 'components/Phonebook/Phonebook.styled';
import { InputFormBox } from 'components/InputForm/InputForm.styled';

export function App() {
  const { data } = useGetContactsQuery();

  const contacts = data ?? [];
  const [myFilter, setMyFilter] = useState('');

  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PhonebookBox>
      <InputFormBox>
        <Title>Phonebook</Title>
        <InputForm contacts={contacts} />
      </InputFormBox>
      <ContactListBox>
        <Filter filter={myFilter} setFilter={setMyFilter} />
        <ContactList contacts={filteredContacts.reverse()} />
      </ContactListBox>
    </PhonebookBox>
  );
}