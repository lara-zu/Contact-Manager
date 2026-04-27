import React, { useState } from 'react';
import '../css/form.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //for validationnn
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }


    addContact({ name, email });

    // Clear form
    setName('');
    setEmail('');
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="inputs-row">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" classname="add-btn" >ADD</button>

        </div>
      </form>
    </div>
  );
};

export default ContactForm;
