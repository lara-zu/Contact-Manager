import React, { useState } from 'react';
import ContactForm from './components/form';
import ContactList from './components/list';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);


  const addContact = (contact) => {
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      ...contact
    };
    setContacts([...contacts, newContact]);
  };


  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Contact Manager App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
