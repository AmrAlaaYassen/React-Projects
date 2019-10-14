import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contacts/contactContext';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts === null) {
    return <h4> Please Add Contacts.</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => {
             return <ContactItem key={contact.id} contact={contact} />;
          })
        : contacts.map(contact => {
             return <ContactItem key={contact.id} contact={contact} />;
          })
      }
    </Fragment>
  );
};
export default Contacts;
