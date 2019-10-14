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
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // clear contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT, payload: {} });
  };
  // update contact
  const updateContact = (contact) => {
    dispatch({type: UPDATE_CONTACT , payload:contact})
  }
  // filter contacts
  const filterContacts = (text) => { 
    dispatch({type: FILTER_CONTACT, payload:text})
  }
  // clear filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER})
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
