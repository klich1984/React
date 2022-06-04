import ConceptosBasicos from './components/ConceptosBasicos'
import CrudApi from './components/CrudApi'
import SongSearch from './components/SongSearch'

/* eslint-disable jsx-a11y/anchor-has-content */
function App() {
  return (
    <div className='App'>
      <h1>React Rutas</h1>
      <a
        href='https://reactrouter.com/docs/en/v6/getting-started/overview'
        target='_blank'
        rel='noreferrer'
      >
        Documentación
      </a>
      <hr />
      <CrudApi />
      <hr />
      {/* <SongSearch /> */}
      <hr />
      {/* <ConceptosBasicos /> */}
    </div>
  )
}

export default App
