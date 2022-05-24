import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
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
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='acerca' activeClassName='active'>
            Acerca
          </NavLink>
          <NavLink to='contacto' activeClassName='active'>
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Párametros: </span>
          <Link to='usuario/carlos'>Carlos</Link>
          <Link to='usuario/erica'>Erica</Link>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptos
