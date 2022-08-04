import ConceptosBasicos from './components/ConceptosBasicos'
import CrudApi from './components/CrudApi'
import SongSearch from './components/SongSearch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

/* eslint-disable jsx-a11y/anchor-has-content */
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        {/* <ConceptosBasicos /> */}
        <hr />
        {/* <CrudApi /> */}
        <hr />
        {/* <SongSearch /> */}
        <footer>
          <a
            href='https://reactrouter.com/docs/en/v6/getting-started/overview'
            target='_blank'
            rel='noreferrer'
          >
            Documentación
          </a>
        </footer>
      </Router>
    </div>
  )
}

export default App
