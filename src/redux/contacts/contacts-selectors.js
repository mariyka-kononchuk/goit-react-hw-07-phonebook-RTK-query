import {createSelector} from '@reduxjs/toolkit'

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

//selector's memoization
export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    //тело функции будет выполнено только если изменится contacts или filter
    (contacts, filter) => {
        const normilizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normilizedFilter));
    }
)   
