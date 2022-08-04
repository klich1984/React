import React from 'react'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <div>
      <header className='App-header'>
        <div className='container header-menu'>
          <h1>React Router</h1>
          <nav className='header-navbar'>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/conceptos-basicos'
                >
                  Conceptos Basicos
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/crud-api'
                >
                  App CrudApi
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/song-search'
                >
                  App Song Search
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
