import React from 'react';
import ContactItem from './item';
import '../css/list.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="list-container">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p className="empty-msg"> mafe :) , add contacts !!! </p>
      ) : (
        contacts.map((contact, index) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            index={index}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
