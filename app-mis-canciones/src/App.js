import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// CssBaseline se usa para tener los estilos base
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import Error404 from './pages/Error404'
import Cancion from './pages/Cancion'
import Buscador from './components/Buscador'
import Letra from './components/Letra'
import ListaCanciones from './components/ListaCanciones'
import Loader from './components/Loader'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'



// Como el componente es una funcion usaremos Hooks para el manejo del estado
function App() {
  // Variable para inicializar el Storage, si hay algo en el local storage lo cargue si no cargue arrelglo vacio y el search
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || []
  let searchInit = {
    artist: '',
    song: '',
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

  // Funcion de Efecto, La variable que detecta un cambio para que se ejecute esta funcion es search
  useEffect(() => {
    //Guarda los datos en localStorage, my Songs es el objeto enviado por el boton del componente Letra
    localStorage.setItem("mySongs", JSON.stringify(mySongs))

    // Getdata sera queien tiene la logica, las peticiones a las apis
    const getData = async () => {
      const { artist, song } = search

      try {
        let artistApi = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${song}`,
        // La API dde lyrics.ovh de la letras canciones esta caida por lo que usare la del reto de comfama
          songApi = `https://api.jikan.moe/v3/search/${artist}?q=${song}&limit=2`,
          artistRes = await fetch(artistApi),
          songRes = await fetch(songApi),
          artistJSON = await artistRes.json(),
          songJSON = await songRes.json()
        // Guardaremos la respuesta en la variable currentSong
        console.log('Respuesta artista', artistJSON)
        console.log('Respuesta cancion', songJSON)

        setCurrentSong({
          artist: songJSON.results[0].title,
          avatar: songJSON.results[0].image_url,
          song,
          lyrics: songJSON.results[0].synopsis
        })

      } catch (error) {
        console.log(error)
        // Como se llaman igual se puede colocar solo el value
        setSearch({
          artist,
          song,
          request: false
        })

        setError(true)
      }
    }

    // Si ocurre un error retorne para que no se quede haciendo la peticion de lo contrario ejecute la funcion getData
    if (!search.request) {
      return;
    } else {
      getData()
    }
  }, [search])

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
                <Buscador
                  search={search}
                  setSearch={setSearch}
                  setError={setError} />
                {/* Solo se visualiza si ya realizamos una busqueda para eso realizamos un condicional de renderizado*/}
                {/* si esta propiedad esta en falso */}
                {!search.request
                  ? (error
                      ? (
                        <Alert
                          severity="error"
                          style={{maxWidth: 752, margin: "2rem, auto, 0"}}>
                          <AlertTitle>Error</AlertTitle>
                          Hubo un problema al consultar
                          <ul>
                            <li>El Artista: <b>{search.artist}</b> o </li>
                            <li>La cancion <b>{search.song}</b></li>
                          </ul>
                        </Alert>
                      )
                      : (<ListaCanciones mySongs={mySongs} setMySongs={setMySongs}/>)
                    )
                    // Si el objeto current Songs esta vacio (No tiene propiedades) para evitar que se cargue al DOM el componente vacio ya que recibe parametros de la peticion
                  : Object.keys(currentSong).length === 0
                    ? (<Loader />)
                    : (
                        (<Letra
                          // La cancion actual para que despliegue la informacion
                          currentSong={currentSong}
                          // para limpiar la n actual
                          setCurrentSong={setCurrentSong}
                          // el arreglo para agregar a la lista o eliminar canciones
                          mySongs={mySongs}
                          setMySongs={setMySongs}
                          // Para limpiar el buscador
                          setSearch={setSearch} />
                          )
                      )
                }
              </Route>
              {/* El componente cancion lo renderizamos de esta manera ya que va recibir una prop */}
              <Route
                path="/cancion/:id"
                children={<Cancion mySongs={mySongs}/>} />
              <Route path="*" component={Error404} />
            </Switch>
          </main>
        </div>
      </CssBaseline>
    </Router>
  )
}

export default App;
