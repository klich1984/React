import React, { useState, useEffect } from 'react'

  const RelojHooks = (props) => {
  // Creamos variables de estado
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  const [active, setActive] = useState(false)

  // Esta funcion se ejecuta cuando alguna de las variables del arreglo cambie, si el arreglo esta vacio solo se ejecuta al principio y al final del ciclo de vida
  useEffect(() => {
    // console.log("Esto es un efecto en el Hook")
    let timer = null
    if (active) {
      timer = setInterval(() => {
        setDate(new Date().toLocaleTimeString())
      }, 1000);
    }
    console.log("El Hook useEffect se ejecuta por que el estado o sus propiedades del componente ha cambiado")
    // return sirve para desuscribirse de apis etc
    return () => {clearInterval(timer)}
  }, [date, active])

  const tictac = (value) => {
    setActive(value)
  }

  return (
    <>
      <p>Reloj Hooks</p>
      <div>{date}</div>
      {/* Las funciones de tictac se estan ejecutando al iniciar el componente ya que tienen valor por defecto por lo que se mete en una funcion anonima para el evento ejecute la funcion*/}
      <button onClick={() => tictac(true)}>Iniciar</button>
      <button onClick={() => tictac(false)}>Detener</button>
    </>
  )
}

export default RelojHooks
