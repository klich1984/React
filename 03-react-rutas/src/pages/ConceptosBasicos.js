import React from 'react'
import { Outlet } from 'react-router-dom'

const ConceptosBasicos = () => {
  return (
    <div>
      <h1>Pagina principal</h1>
      <p>Navega por los diferentes menus</p>
      <Outlet />
    </div>
  )
}

export default ConceptosBasicos
