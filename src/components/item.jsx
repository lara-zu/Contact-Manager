import React from 'react';
import '../css/item.css';

const ContactItem = ({ contact, index, deleteContact }) => {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <span className="contact-number">{index + 1}.</span>
        <span className="contact-name">{contact.name}</span>
        <span className="contact-email">{contact.email}</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteContact(contact.id)}

      //  on Click-{() => deleteContact (contact.id )   }
      >
        DELETE
      </button>
    </div>
  );
};

export default ContactItem;
