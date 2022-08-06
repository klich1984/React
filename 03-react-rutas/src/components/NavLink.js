import React from 'react'
import { NavLink as NavLinkReactRouter } from 'react-router-dom'

const NavLink = ({ to, children, handleClick }) => {
  return (
    <NavLinkReactRouter
      className={({ isActive }) => (isActive ? 'active' : '')}
      to={to}
      onClick={handleClick}
    >
      {children}
    </NavLinkReactRouter>
  )
}

export default NavLink
