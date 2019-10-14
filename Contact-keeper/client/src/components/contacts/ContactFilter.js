import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contacts/contactContext';
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef('');
  useEffect(() => {
    if(filtered === null) { 
      text.current.value ='';
    }
  },);
  const onChange = e => {
    if (text !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <from>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts ...'
        onChange={onChange}
      />
    </from>
  );
};

export default ContactFilter;
