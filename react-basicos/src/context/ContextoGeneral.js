import React, {useState} from 'react'
export const ThemeContext = React.createContext()

const ContextoGeneral = (props) => {
  const [nombre, setNombre] = useState('Carlos')
  const [apellido, setApellido] = useState('Usuga')
  return (
    // Proveedor nombre es una propiedad general de la cual van a ver todos los hijos que dependen de textconten
    <ThemeContext.Provider value={{nombre, apellido}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ContextoGeneral
