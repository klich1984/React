// Se recomienda usar el alias ya que es casi un estandar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Usuario from '../pages/Usuario'
import MenuConceptos from './MenuConceptos'

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        {/* Routes es el remplazo del componente Switch */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='acerca' element={<Acerca />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='usuario/:username' element={<Usuario />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default ConceptosBasicos
