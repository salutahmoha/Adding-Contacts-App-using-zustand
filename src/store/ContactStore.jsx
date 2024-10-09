// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";
// const ContactsStore = function(set){
//   return{
//     contacts: [],

//     addContact: function (addNewContact) {
//       set(function (state) {
//         return { contacts: [addNewContact, ...state.contacts] };
//       });
//     },

//     deleteContact: function (ContactId){
//       set(function (state) {
//         const updatedContacts = state.contacts.filter((currentContact) => currentContact.id !== ContactId,);
//         return { contacts: updatedContacts };
//       });
//     },

//     disableContact: function(ContactId){
//       set(function (state) {
//         const updatedContacts = state.contacts.map((contact) =>
//           contact.id === ContactId ? { ...contact, disabled: !contact.disabled } : contact
//         );
//         return { contacts: updatedContacts };
//       });
//     }
//   }};
  




// const useContactsStore = create(devtools(persist(ContactsStore, { name: "addContact" })));
//   export default useContactsStore;