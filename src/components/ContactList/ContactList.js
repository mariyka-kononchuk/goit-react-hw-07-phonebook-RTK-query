import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

const ContactList = ({contacts}) => (
    <ul className={s.list}>
        {contacts.map((contacts)=> (
            <li key={contacts.id}  >
                <ContactListItem contacts={contacts}/>
            </li>
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default ContactList;

 