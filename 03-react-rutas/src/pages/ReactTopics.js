import { NavLink, Route, Routes } from 'react-router-dom'
import Topic from './Topic'

const ReactTopics = () => {
  return (
    <div className='section-page'>
      <h3>Página de Rutas Anidadas</h3>
      <p>
        Se está renderizando la página{' '}
        <b>
          <i>Temas de React</i>
        </b>
        , con la ruta <b>"/react/*"</b>
      </p>
      <h4>
        Ver Temas de <i>React</i>
      </h4>
      <ul className='section-page-list'>
        <li>
          <NavLink to='jsx'>
            <i>JSX</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='props'>
            <i>Props</i>
          </NavLink>
        </li>
        <li>
          <NavLink to='estado'>Estado</NavLink>
        </li>
        <li>
          <NavLink to='componentes'>Componentes</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path=':topic' element={<Topic />} />
      </Routes>
    </div>
  )
}

export default ReactTopics
