import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contacts/contactContext';
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current) {
      setContact(current);
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;
  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact({
        name,email,phone,type
      });
    }
    clearAll()
  };

  const clearAll = () => {
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        value={name}
        onChange={onChange}
        name='name'
        placeholder='Name'
      />
      <input
        type='email'
        value={email}
        onChange={onChange}
        name='email'
        placeholder='Email'
      />
      <input
        type='text'
        value={phone}
        onChange={onChange}
        name='phone'
        placeholder='Phone'
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear Contact
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
