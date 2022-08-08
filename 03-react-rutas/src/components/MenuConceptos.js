import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import NavLink from './NavLink'

const MenuConceptos = () => {
  const sectionRef = useRef()

  const handleClick = () => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <nav>
      <ol className='list-menu'>
        <li>
          <p>
            Enlaces{' '}
            <i>
              a de <b>HTML</b>
            </i>{' '}
            No se recomiendan por que recarga la pagína:
          </p>
          <div>
            <a href='/'>Home</a>
            <a href='acerca'>Acerca</a>
            <a href='contacto'>Contacto</a>
          </div>
        </li>
        <li>
          <p>
            Enlaces usando el Componente{' '}
            <b>
              <i>Link</i>
            </b>
            :
          </p>
          <div>
            <Link onClick={handleClick} to='/'>
              Home
            </Link>
            <Link onClick={handleClick} to='acerca'>
              Acerca
            </Link>
            <Link onClick={handleClick} to='contacto'>
              contacto
            </Link>
            <NavLink onClick={handleClick} to='no-existe'>
              No existe
            </NavLink>
          </div>
        </li>
        <li>
          {/* La diferencia entre Link y Navlink es que el NavLink le puedo pasar una clase para saber que link esta activo */}
          <p>
            Enlaces usando el Componente{' '}
            <b>
              <i>NavLink</i>
            </b>
            :
          </p>
          <div>
            <NavLink onClick={handleClick} to='/'>
              Home
            </NavLink>
            <NavLink onClick={handleClick} to='acerca'>
              Acerca
            </NavLink>
            <NavLink onClick={handleClick} to='contacto'>
              Contacto
            </NavLink>
          </div>
        </li>
        <li>
          <p>
            Paso de párametros por la{' '}
            <b>
              <i>URL</i>:
            </b>
          </p>
          <div>
            <NavLink onClick={handleClick} to='usuario/carlos'>
              Carlos
            </NavLink>
            <NavLink onClick={handleClick} to='usuario/pepito'>
              Pepito
            </NavLink>
            <NavLink onClick={handleClick} to='usuario/perez'>
              Perez
            </NavLink>
          </div>
        </li>
        <li>
          <p>
            Parámetros de Consulta por{' '}
            <b>
              <i>URL</i>
            </b>
            :{' '}
          </p>
          <div>
            <NavLink onClick={handleClick} to='productos'>
              Productos
            </NavLink>
          </div>
        </li>
        <li>
          <p>Manejo de Redirecciones: </p>
          <div>
            <NavLink onClick={handleClick} to='about'>
              About
            </NavLink>
            <NavLink onClick={handleClick} to='contact'>
              Contact
            </NavLink>
          </div>
        </li>
        <li>
          <p>Manejo de Rutas Anidadas: </p>
          <div>
            <NavLink onClick={handleClick} to='react'>
              React
            </NavLink>
          </div>
        </li>
        <li>
          <p>Manejo de Rutas Privadas: </p>
          <div ref={sectionRef}>
            <NavLink onClick={handleClick} to='login'>
              Login
            </NavLink>
            <NavLink onClick={handleClick} to='dashboard'>
              Dashboard
            </NavLink>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptos
