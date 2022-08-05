import React from 'react'
import { NavLink as NavLinkReactRouter } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  return (
    <NavLinkReactRouter
      className={({ isActive }) => (isActive ? 'active' : '')}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}

export default NavLink
