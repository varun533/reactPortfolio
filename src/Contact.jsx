import React from 'react';
import { useState } from 'react';


export default function Contact(){
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    // Send form data to server or do something else
  }
    return(
        <section className="cont">
      <div className="contact" id="contact">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />

      <label htmlFor="message" >Message:</label>
      <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} />

      <button type="submit" id='sub'><span id='subm'>Submit</span></button>
    </form>

      </div>
    </section>
    )
}