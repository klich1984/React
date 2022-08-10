import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ConceptosBasicos from './pages/ConceptosBasicos'
import WithRouter from './components/WithRouter'
import ButtonsApp from './components/ButtonsApp'
import WithHasRouter from './components/WithHasRouter'
import CrudApi from './components/CrudApi'
import SongSearch from './components/SongSearch'
import { LocalStorageProvider } from './context/LocalStorajeContext'

function App() {
  const [showRouter, setShowRouter] = useState(false)
  const [showHasRouter, setShowHasRouter] = useState(false)
  const [showSongSearch, setShowSongsearch] = useState(false)
  const [showCrudApi, setShowCrudApi] = useState(false)

  const handleRoute = () => window.history.pushState({}, '', '/')

  return (
    <div className='App'>
      <Header />
      <main>
        <ConceptosBasicos />
        <LocalStorageProvider>
          <ButtonsApp
            setShowRouter={setShowRouter}
            setShowHasRouter={setShowHasRouter}
            setShowSongsearch={setShowSongsearch}
            setShowCrudApi={setShowCrudApi}
            handleRoute={handleRoute}
          />
        </LocalStorageProvider>
        {showRouter && <WithRouter />}
        {showHasRouter && <WithHasRouter />}
        {showCrudApi && <CrudApi />}
        {showSongSearch && (
          <LocalStorageProvider>
            <SongSearch />
          </LocalStorageProvider>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
