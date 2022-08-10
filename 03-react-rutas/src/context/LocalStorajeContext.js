import { createContext, useState } from 'react'

const localStorageContext = createContext()

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [] // Leer del Local Storage

const LocalStorageProvider = ({ children }) => {
  const [mySongs, setMySongs] = useState(mySongsInit)

  const getLocalStorage = () => {
    let readLocalStorage = JSON.parse(localStorage.getItem('mySongs')) || [] // Leer del Local Storage
    setMySongs(readLocalStorage)
  }

  const data = { mySongs, setMySongs, getLocalStorage }

  return (
    <localStorageContext.Provider value={data}>
      {children}
    </localStorageContext.Provider>
  )
}

export { LocalStorageProvider }
export default localStorageContext
