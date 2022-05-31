// Se recomienda usar el alias ya que es casi un estandar
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter,
  Link,
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

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash router</h2>
      <HashRouter>
        <MenuConceptos />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='acerca' element={<Acerca />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='usuario/:username' element={<Usuario />} />
          <Route path='productos' element={<Productos />} />
          {/* Redirecciones */}
          <Route
            path='/about'
            element={
              <>
                {' '}
                <Navigate to='/acerca' />{' '}
              </>
            }
          />
          <Route
            path='/contact'
            element={
              <>
                {' '}
                <Navigate to='/contacto' />{' '}
              </>
            }
          />
          <Route path='/react/*' element={<ReactTopics />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/dashboard' element={<Daschboard />} /> */}
          <Route path='/dashboard' element={<PrivateRoute />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </HashRouter>
      <hr />
      <h2>Conceptos Básicos</h2>
      <Router>
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
            path='/about'
            element={
              <>
                {' '}
                <Navigate to='/acerca' />{' '}
              </>
            }
          />
          <Route
            path='/contact'
            element={
              <>
                {' '}
                <Navigate to='/contacto' />{' '}
              </>
            }
          />
          <Route path='/react/*' element={<ReactTopics />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/dashboard' element={<Daschboard />} /> */}
          <Route path='/dashboard' element={<PrivateRoute />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default ConceptosBasicos
