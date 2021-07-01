import React from 'react'
// Importo el hook useLocatiom que me permite obtener el objeto Location del navegador (la ruta)
import { useLocation, Link } from 'react-router-dom'

const Error404 = () => {
  const url = useLocation()
  // console.log(url)
  return (
    <div>
      <h3>Error404</h3>
      <p>La URL: <b>{url.pathname}</b> no fue encontrada</p>
      <p>Regresa al <Link to="/" className="App-link">Home</Link></p>
    </div>
  )
}

export default Error404
