// Se recomienda usar el alias ya que es casi un estandar
import { useRef } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Productos from '../pages/Productos'
import ReactTopics from '../pages/ReactTopics'
import Usuario from '../pages/Usuario'
import MenuConceptos from './MenuConceptos'
import PrivateRoute from './PrivateRoute'

const WithRouter = () => {
  return (
    <div className='app-container-router'>
      <Router>
        <h2>
          Página realizada con <i>BrowserRouter</i>
        </h2>
        <MenuConceptos />

        {/* Routes es el remplazo del componente Switch */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='acerca' element={<Acerca />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='usuario/:username' element={<Usuario />} />
          <Route path='productos' element={<Productos />} />
          {/* Redirecciones */}
          <Route
            path='about'
            element={
              <>
                {' '}
                <Navigate to='/acerca' />{' '}
              </>
            }
          />
          <Route
            path='contact'
            element={
              <>
                {' '}
                <Navigate to='/contacto' />{' '}
              </>
            }
          />
          <Route path='react/*' element={<ReactTopics />} />
          <Route path='login' element={<Login />} />
          {/* <Route path='/dashboard' element={<Daschboard />} /> */}
          <Route path='dashboard' element={<PrivateRoute />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default WithRouter
