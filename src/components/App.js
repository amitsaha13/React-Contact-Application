import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Card, Row, Col } from 'react-bootstrap'
function App() {

  const [contacts, setContacts] = useState([]);
  const LSKey = "contacts"

  //function for inserting data 
  const addContactHandler = (contact) => {
    //console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }])

  };

  //function for removing data 
  const removeContactHandler = (id) => {

    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newContactList)
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LSKey, JSON.stringify(contacts)))
    if (retriveContacts) {
      setContacts(retriveContacts)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LSKey, JSON.stringify(contacts))
  }, [contacts])



  return (
    <div className="App">
      {/* <Header /> */}
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />

    </div>
  );
}

export default App;
