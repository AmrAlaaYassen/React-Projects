import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner'
import ContactContext from '../../context/contacts/contactContext';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, [])

  if (contacts && contacts.length <= 0 && !loading ) {
    return <h4> Please Add Contacts.</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? ( filtered !== null
        ? filtered.map(contact => {
             return <ContactItem key={contact._id} contact={contact} />;
          })
        : contacts.map(contact => {
             return <ContactItem key={contact._id} contact={contact} />;
          })
      ): <Spinner /> }
     
    </Fragment>
  );
};
export default Contacts;
