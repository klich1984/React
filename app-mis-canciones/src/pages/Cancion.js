import React from 'react'
import { useParams } from 'react-router-dom'

const Cancion = () => {
  let { id } = useParams()

  return (
    <div>
      <h2>Cancion {id}</h2>
    </div>
  )
}

export default Cancion
