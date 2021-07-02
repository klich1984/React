import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// CssBaseline se usa para tener los estilos base
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import Error404 from './pages/Error404'
import Cancion from './pages/Cancion'
import Buscador from './components/Buscador'


// Como el componente es una funcion usaremos Hooks para el manejo del estado
function App() {
  // Variable para inicializar ek Storage, y el search
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs"))
  let searchInit = {
    artista: '',
    cancion: '',
    request: false
  }
  // Variables de estado, un arreglo para guardar las canciones
  const [mySongs, setMySongs] = useState(mySongsInit)
  // Buscador, la variable request(peticion) me sirve para limpiar el buscador y si no encuentra la informacion de la busqueda
  const [search, setSearch] = useState(searchInit)
  // PAra el manejo de rutas, para saber que cancion estoy consultando o quiero eliminar
  const [currentSong, setCurrentSong] = useState({})
  // Variable de error, ayuda a controlar el loader
  const [error, setError] = useState(false)

  return (
    <Router>
      <CssBaseline>
      <div className="App">
        {/* Utilizamos el componente Header */}
        <Header />
        <main className="App-main">
          {/* Creamos enrutador */}
          <Switch>
            {/* Inicialmente renderizamos el home directamente */}
            <Route exact path="/">
              <Buscador />
              <h2>Home</h2>
            </Route>
            {/* El componente cancion lo renderizamos de esta manera ya que va recibir una prop */}
            <Route path="/cancion/:id" children={<Cancion />}/>
            <Route path="*" component={Error404}/>
          </Switch>
        </main>
    </div>
      </CssBaseline>
    </Router>
  )
}

export default App;
