import React, {useContext} from 'react'
import { ThemeContext } from '../../context/ContextoGeneral'

const Home = () => {
  const {nombre} = useContext(ThemeContext)
  const { apellido } = useContext(ThemeContext)
  return (
    <div>
      <p>{nombre}</p>
      <p>{apellido}</p>
    </div>
  )
}

export default Home
