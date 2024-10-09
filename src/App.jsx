import { useState } from 'react'
import { create } from 'zustand'
import './App.css'
import ContactInput from './Contact/contactInput'
import ContactItems from './Contact/contactItem'
function App() {

  return (
    <>
     <ContactInput/>
     <ContactItems/>
    </>
  )
}

export default App
