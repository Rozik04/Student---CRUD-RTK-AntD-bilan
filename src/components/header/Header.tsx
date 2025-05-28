import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/create'}>Create</NavLink>

    </div>
  )
}

export default React.memo(Header)