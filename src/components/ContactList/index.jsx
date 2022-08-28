import { ContactItem } from 'components/ContactItem/index';
import { ContactListBox, TitleContactsList } from './ContactList.styled';
import { useGetContactsQuery } from 'Redux/contactsApi';
import { useSelector } from 'react-redux';
//import { useState } from 'react';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { data } = useGetContactsQuery();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      <TitleContactsList>Contact List</TitleContactsList>
      <ContactListBox>
        {filteredContacts.map(({ id, name, phone }) => {
          return <ContactItem key={id} id={id} name={name} number={phone} />;
        })}
      </ContactListBox>
    </>
  );
};
