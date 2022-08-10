import { createContext, useState } from 'react'

const LocalStorageContext = createContext()

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [] // Leer del Local Storage

const LocalStorageProvider = ({ children }) => {
  const [mySongs, setMySongs] = useState(mySongsInit)

  const getLocalStorage = () => {
    let readLocalStorage = JSON.parse(localStorage.getItem('mySongs')) || [] // Leer del Local Storage
    setMySongs(readLocalStorage)
  }

  const data = { mySongs, setMySongs, getLocalStorage }

  return (
    <LocalStorageContext.Provider value={data}>
      {children}
    </LocalStorageContext.Provider>
  )
}

export { LocalStorageProvider }
export default LocalStorageContext
