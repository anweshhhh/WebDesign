import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import List from './List';

function Contact(){
    
      const contacts = [
        {
            id: 1,
            name: "Aniruddha",
            contact: 8574524278
        },
        {
            id: 2,
            name: "Ani",
            contact:8574524277 
        },
        {
            id: 3,
            name: "Ayush",
            contact: 8574524279
        }
        
    ];

    return(
      <div>
      <Navbar/>
      <Content title="Contact" content="Welcome to the contact Page"/>
      {contacts.map(contact => (<List
        id = {contact.id}
        name = {contact.name}
        contact = {contact.contact}
      />))}
      </div>
    )
}

export default Contact