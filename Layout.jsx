import React from 'react'
import Header from './src/Components/Header/Header'
import Footer from './src/Components/Footer/footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout