import React, { useState } from 'react';
import {useFetchContactsQuery} from '../../redux/contacts/contactsSlice'
import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import SpinnerLoader from '../Loader';

function App() {
  const [filter, setFilter] = useState('');

  const { data, isFetching } = useFetchContactsQuery();
  
  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
  }
  
    return (
      <Container>
        <div>
          <h1 className={s.titlePhonebbok}>Phonebook</h1>
          <ContactForm />
          <h2 className={s.titleContacts}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          {isFetching && <SpinnerLoader />}
          {data && <ContactList contacts={getVisibleContacts()}/>}
        </div>
      </Container>
    );
  
}

export default App;


