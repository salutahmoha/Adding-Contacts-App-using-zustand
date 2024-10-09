import React from 'react'
import useContactsStore from '../store/ContactStore'
import "../App.css"

function ContactItem({id, firstName, lastName, email, phoneNumber, disabled}) {

    const deleteContact = useContactsStore((state) => state.deleteContact);
    const disableContact = useContactsStore((state) => state.disableContact);

    const handleDeleteContact = (e) => {
        e.preventDefault();
        deleteContact(id);
      };

      const handleDisableContact = (e) => {
        e.preventDefault();
        disableContact(id);
      };
  return (
    <div className='contactItem'>
        <div className="contact-result">
        <p className={disabled ? "strikethrough" : ""}>{firstName} {lastName}</p>
        <p className={disabled ? "strikethrough" : ""}>{email}</p>
        <p className={disabled ? "strikethrough" : ""}>{phoneNumber}</p>

        <button className='btnResult update-btn' disabled={disabled}>Update Contact</button>
        <button className='btnResult delete-btn' onClick={handleDeleteContact}>Delete Contact</button>
        <button className='btnResult disable-btn' onClick={handleDisableContact}>{disabled ? "Enable Contact" : "Disable Contact"}</button>
        </div>
    </div>
  );
}



function ContactItems() {

    const contacts = useContactsStore((state) => state.contacts)
  return (
    <section className="contact-items-container">
      {contacts.map((currentContact, index) => (
        <ContactItem
          key={index}
          id={currentContact.id}
          firstName = {currentContact.firstName}
          lastName = {currentContact.lastName}
          email = {currentContact.email}
          phoneNumber = {currentContact.phoneNumber}
          disabled={currentContact.disabled}
        />
      ))}
    </section>
  )
}

export default ContactItems