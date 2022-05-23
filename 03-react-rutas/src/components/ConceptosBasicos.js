// Se recomienda usar el alias ya que es casi un estandar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Acerca from './Acerca'
import Contacto from './Contacto'
import Home from './Home'

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='acerca' element={<Acerca />} />
          <Route path='contacto' element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  )
}

export default ConceptosBasicos
