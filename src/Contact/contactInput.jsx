import React, {useRef, useState, useEffect } from 'react'

import useContactsStore from '../store/ContactStore';
import "../App.css"
function ContactInput() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const addContact = useContactsStore((state) => state.addContact);


  
    const handleChangeContactFirstName = (e) => {
      setFirstName(e.target.value);
    };

    const handleChangeContactLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangeContactEmail = (e) => {
        setEmail(e.target.value);
    };
  
    const handleChangeContactPhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddContact = (e) => {
        e.preventDefault();
        if (!firstName) return alert("Please enter your firstname");
        if (!lastName) return alert("Please enter your lastname");
        if (!email) return alert("Please enter your email address");
        if (!phoneNumber) return alert("Please enter your phone Number");
        
        const addNewContact = {
          id: Math.ceil(Math.random() * 10000000),
          firstName: firstName,
          lastName: lastName,
         email: email,
          phoneNumber: phoneNumber,
        }
        console.log(addNewContact);
        addContact(addNewContact);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
      }

  return (
    <div>
        <h2>Contact Book</h2>
        <form className='contactForm'>
            <input type="text"  placeholder="Enter your first name" value={firstName} onChange={handleChangeContactFirstName}/>
            <input type="text" placeholder="Enter your last name" value={lastName} onChange={handleChangeContactLastName}/>
            <input type="email"  placeholder="Enter your email address"  value={email} onChange={handleChangeContactEmail}/>
            <input type="number" placeholder="Enter your phone number" value={phoneNumber} onChange={handleChangeContactPhoneNumber}/>

            <button type='submit' className='btn' onClick={handleAddContact}>Add Contact</button>
        </form>
    </div>
  )
}

export default ContactInput