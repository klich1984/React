import logo from './logo.svg'
import './App.css'
import { RuteoBasico } from './components/RuteoBasico/RuteoBasico'
// Ejemplo de ruteo por parametrso una url que no exista
import RuteoPorParametros from './components/RuteoPorParametro/RuteoPorParametros'
// Ejemplo de ruteo Anidado
import RuteoAnidado from './components/RuteoAnidado/RuteoAnidado'
// Ejemplo de Redirecciones
import { Redirecciones } from './components/Redirecciones/Redirecciones'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Manejo de Rutas</h1>
        <div className='App-header'>
          {/* Comento para no tener los dos ejemplos corriendo al mismo tiempo */}
          <RuteoBasico />
          <RuteoPorParametros />
          <RuteoAnidado />
          <Redirecciones />
        </div>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  )
}

export default App
