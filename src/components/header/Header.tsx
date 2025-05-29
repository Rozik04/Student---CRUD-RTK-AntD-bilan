import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-700">StudentApp</h1>

      <nav className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold border-b-2 border-green-500 pb-1'
              : 'text-gray-700 hover:text-green-500 transition'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold border-b-2 border-green-500 pb-1'
              : 'text-gray-700 hover:text-green-500 transition'
          }
        >
          Create
        </NavLink>
      </nav>
    </header>
  )
}

export default React.memo(Header)
