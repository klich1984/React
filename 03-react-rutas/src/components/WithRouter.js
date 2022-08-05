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
import ConceptosBasicos from '../pages/ConceptosBasicos'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Productos from '../pages/Productos'
import ReactTopics from '../pages/ReactTopics'
import Usuario from '../pages/Usuario'
import MenuConceptos from './MenuConceptos'
import Navbar from './Navbar'
import PrivateRoute from './PrivateRoute'

const WithRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <h2>Pagina con ReactTouter</h2>
        {/* Routes es el remplazo del componente Switch */}
        <Routes>
          <Route path='/' element={<ConceptosBasicos />} />
          <Route path='/conceptos-basicos/*' element={<Home />}>
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
                  <Navigate to='acerca' />{' '}
                </>
              }
            />
            <Route
              path='contact'
              element={
                <>
                  {' '}
                  <Navigate to='contacto' />{' '}
                </>
              }
            />
            <Route path='react/*' element={<ReactTopics />} />
            <Route path='login' element={<Login />} />
            {/* <Route path='/dashboard' element={<Daschboard />} /> */}
            <Route path='dashboard' element={<PrivateRoute />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
        <MenuConceptos />
      </Router>
    </div>
  )
}

export default WithRouter
