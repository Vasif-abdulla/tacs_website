import React from 'react'
import styles from './Contact.module.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import { ContactContainer } from './Components/ContactContainer/ContactContainer'

export const Contact = () => {
  return (
    <>
    <Navbar/>
    <ContactContainer/>
    <Footer/>
    </>
  )
}
