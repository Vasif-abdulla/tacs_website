import React from 'react'
import styles from './OfficeBearers.module.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import { OfficeBearerContainer } from './Components/OfficeBearerContainer/OfficeBearerContainer'

export const OfficeBearers = () => {
  return (
    <>
        <Navbar/>
        <OfficeBearerContainer/>
        <Footer/>
    </>
  )
}
