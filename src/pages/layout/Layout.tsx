import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default React.memo(Layout)