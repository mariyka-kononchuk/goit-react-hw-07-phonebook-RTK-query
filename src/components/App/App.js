import React from 'react';
import { connect } from 'react-redux';
import {fetchContacts} from '../../redux/contacts/contacts-operations'
import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import SpinnerLoader from '../Loader';

import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice'


function App({ fetchContacts }) {
  const { data, isFetching } = useFetchContactsQuery();
  console.log(data, isFetching);
  // fetchContacts();
    return (
      <Container>
        <div>
          <h1 className={s.titlePhonebbok}>Phonebook</h1>
          <ContactForm />
          <h2 className={s.titleContacts}>Contacts</h2>
          <Filter />
          {isFetching && <SpinnerLoader />}
          {data && <ContactList contacts={data}/>}
        </div>
      </Container>
    );
  
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts())
})

export default connect(null, mapDispatchToProps)(App);


