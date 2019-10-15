import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CONTACT_ERROR,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  SET_CURRENT,
  GET_CONTACTS,
  CLEAR_CONTACT
} from '../types';

const config = {
  headers: {
    'Contact-Type': 'application/json'
  }
};
const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts

  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts', config);
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR });
    }
  };
  // Add contact
  const addContact = async contact => {
    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };
  // Delete contact
  const deleteContact = async id => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`, config);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };
  // update contact
  const updateContact = async contact => {
    try {
      const res = axios.put(`/api/contact/${contact._id}`, contact, config);
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // clear contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT, payload: {} });
  };

  // filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //Clear Contact
  const clearContact = () => {
    dispatch({ type: CLEAR_CONTACT });
  };
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
        clearFilter,
        error: state.error,
        getContacts,
        clearContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
