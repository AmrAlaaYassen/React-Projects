import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import uuid from 'uuid'; 
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  SET_ALERT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  SET_CURRENT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        phone: '111-111-111',
        email: 'jill@gmail.com',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Joe Doe',
        phone: '444-444-444',
        email: 'john@gmail.com',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Mark',
        phone: '555-555-555',
        email: 'mark@gmail.com',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => { 
    contact.id = uuid.v4();
    dispatch({type: ADD_CONTACT, payload:contact});
  }
  // Delete contact
  // Set current contact
  // clear contact
  // update contact
  // filter contacts
  // clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact:addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};


export default ContactState;