import React from 'react'
import { Outlet } from "react-router";
import NavBar from './navbar.jsx'
import Footer from './footer.jsx'
import WhatsappIcon from './whatsappIcon.jsx';


function Layout() {
  return (
    <>
    <WhatsappIcon/>
    <NavBar/>
    
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout