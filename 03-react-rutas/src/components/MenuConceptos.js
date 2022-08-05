import { Link } from 'react-router-dom'
import NavLink from './NavLink'

const MenuConceptos = () => {
  let urlPath = '/conceptos-basicos'

  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML(No recomendaddo por que recarga la pagína): </span>
          <a href={urlPath}>Home</a>
          <a href={`${urlPath}/acerca`}>Acerca</a>
          <a href={`${urlPath}/contacto`}>Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to={urlPath}>Home</Link>
          <Link to={`${urlPath}/acerca`}>Acerca</Link>
          <Link to={`${urlPath}/contacto`}>contacto</Link>
          <Link to={`${urlPath}/no-existe`}>No existe</Link>
        </li>
        <li>
          {/* La diferencia entre Link y Navlink es que el NavLink le puedo pasar una clase para saber que link esta activo */}
          <span>Componente NavLink: </span>
          <NavLink to={urlPath}>Home</NavLink>
          <NavLink to={`${urlPath}/acerca`}>Acerca</NavLink>
          <NavLink to={`${urlPath}/contacto`}>Contacto</NavLink>
        </li>
        <li>
          <span>Párametros: </span>
          <NavLink to={`${urlPath}/usuario/carlos`}>Carlos</NavLink>
          <NavLink to={`${urlPath}/usuario/erica`}>Erica</NavLink>
        </li>
        <li>
          <span>Parámetros de Consulta: </span>
          <Link to={`${urlPath}/productos`}>Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to={`${urlPath}/about`}>About</Link>
          <Link to={`${urlPath}/contact`}>Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to={`${urlPath}/react`}>React</Link>
        </li>
        <li>
          <span>Rutas Privadas: </span>
          <Link to={`${urlPath}/login`}>Login</Link>
          <Link to={`${urlPath}/dashboard`}>Dashboard</Link>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptos
