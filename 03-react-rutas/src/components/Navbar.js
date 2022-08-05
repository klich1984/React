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
                <NavLink to='/conceptos-basicos'>Conceptos Basicos</NavLink>
              </li>
              <li>
                <NavLink to='/crud-api'>App CrudApi</NavLink>
              </li>
              <li>
                <NavLink to='/song-search'>App Song Search</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
