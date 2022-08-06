import React from 'react'
import NavLink from './NavLink'

const NavPpl = ({ resetHome }) => {
  return (
    <nav className='header-navbar'>
      <ul>
        <li>
          <NavLink resetHome={resetHome} to='/conceptos-basicos'>
            Conceptos Basicos
          </NavLink>
        </li>
        <li>
          <NavLink to='/crud-api'>App CrudApi</NavLink>
        </li>
        <li>
          <NavLink to='/song-search'>App Song Search</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavPpl
