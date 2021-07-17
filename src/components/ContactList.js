import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Button, Form, Card, Row, Col, CardImg } from 'react-bootstrap'
import ContactCard from './ContactCard';

function ContactList(props) {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((singleContactDetails) => {
        return (
            <ContactCard singleContactDetails={singleContactDetails} clickHandler={deleteContactHandler} key={singleContactDetails.id}></ContactCard>
        );
    });
    console.log(props);


    return (
        <div>
            {renderContactList}
        </div>
    )
}

export default ContactList
