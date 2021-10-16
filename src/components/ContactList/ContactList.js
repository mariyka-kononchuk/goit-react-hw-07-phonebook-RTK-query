import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import {fetchContacts} from '../../redux/contacts/contacts-operations'
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';


const ContactList = ({contacts, onDelete}) => (
    <ul className={s.list}>
        {contacts.map((contacts)=> (
            <li key={contacts.id}  >
                <ContactListItem contacts={contacts} onDeleteContact={onDelete}/>
            </li>
        ))}
    </ul>
)

// const mapStateToProps = (state) => {
//     return {
//         contacts: getVisibleContacts(state)
//     }
//   }

// export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default ContactList;

 