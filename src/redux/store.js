import { configureStore} from "@reduxjs/toolkit";
import {contactsApi} from './contacts/contactsSlice'
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]:contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        logger,
        contactsApi.middleware,
    ]
})

export default store;