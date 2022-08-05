import { useState } from 'react'
// import ConceptosBasicos from './components/ConceptosBasicos'
import CrudApi from './components/CrudApi'
import SongSearch from './components/SongSearch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ConceptosBasicos from './pages/ConceptosBasicos'
import WithHasRouter from './components/WithHasRouter'
import Footer from './components/Footer'
import WithRouter from './components/WithRouter'

/* eslint-disable jsx-a11y/anchor-has-content */
function App() {
  const [tagState, setTagState] = useState(true)

  const handleClick = () => {
    window.history.pushState({}, 'home', '')
    setTagState(!tagState)
  }

  return (
    <div className='App'>
      <main>
        {tagState ? <WithRouter /> : <WithHasRouter />}

        <button onClick={handleClick}>
          Cambiar a{tagState ? ' HasRouter' : ' Router'}
        </button>
        <Router>
          {/* <Route path='/crud-api' element={<CrudApi />} /> */}
          {/* <Route path='/' element={<HomePages />} /> */}
          {/* <ConceptosBasicos /> */}
          {/* <hr /> */}
          {/* <CrudApi /> */}
          {/* <hr /> */}
          {/* <SongSearch /> */}
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
