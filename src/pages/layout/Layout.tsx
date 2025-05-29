import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
        <Header />
      </header>

      <main className="pt-20 pb-20 min-h-screen bg-gray-50">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 shadow-inner bg-white">
        <Footer />
      </footer>
    </>
  )
}

export default React.memo(Layout)
