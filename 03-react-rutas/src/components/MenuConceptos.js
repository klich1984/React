import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
  let activeStyle = {
    textDecoration: 'underline',
  }

  let activeClassName = 'underline'

  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML(No recomendaddo por que recarga la pagína): </span>
          <a href='/'>Home</a>
          <a href='acerca'>Acerca</a>
          <a href='contacto'>Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to='/'>Home</Link>
          <Link to='acerca'>Acerca</Link>
          <Link to='contacto'>contacto</Link>
          <Link to='no-existe'>No existe</Link>
        </li>
        <li>
          {/* La diferencia entre Link y Navlink es que el NavLink le puedo pasar una clase para saber que link esta activo */}
          <span>Componente NavLink: </span>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to='acerca'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Acerca
          </NavLink>
          <NavLink
            to='contacto'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Párametros: </span>
          <NavLink
            to='usuario/carlos'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Carlos
          </NavLink>
          <NavLink
            to='usuario/erica'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Erica
          </NavLink>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptos
