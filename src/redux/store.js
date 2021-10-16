//with Redux Toolkit
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
//import { useReducer } from './users/usersSlice';
import {contactsApi} from './contacts/contactsSlice'

import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import combineReducer from './contacts/contacts-reducer';

//for watching prevState, action, nextState in console
// const middleware = [...getDefaultMiddleware({
//     serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//     }
// }),
//     logger]

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// })

// const persistedReducer = rootReducer

// const store = configureStore({
//     reducer: persistedReducer, 
//     middleware,
//     devTools: process.env.NODE_ENV === 'development',
// })



export const store = configureStore({
    reducer: {
        contacts: combineReducer,
        [contactsApi.reducerPath]:contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ]
})

export default store;