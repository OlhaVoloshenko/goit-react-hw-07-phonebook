//import { useState } from 'react';
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

export const App = () => {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <PhonebookBox>
      <InputFormBox>
        <Title>Phonebook</Title>
        <InputForm />
      </InputFormBox>
      <ContactListBox>
        <Filter />
        {isLoading ? (
          <p className="message">Loading...</p>
        ) : data.length > 0 ? (
          <ContactList />
        ) : (
          <p className="message">Contacts list is empty</p>
        )}
      </ContactListBox>
    </PhonebookBox>
  );
};
