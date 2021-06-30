import React, { useState } from 'react'

const ContadorHooks = (props) => {
  // Representar un valor del estado en hooks
  // useState deveulve dos posiciones, la primera es el estado que esta trabajando en ese momento y el segundo es una funcion que me actualiza ese estado
  const [cuenta, setCuenta] = useState(0)

  // Las consideramos como funciones expresadas o declaradas
  const sumar = () => {
    setCuenta(cuenta + 1)
  }

  const restar = () => {
    setCuenta(cuenta - 1)
  }

  return (
    <div>
      {/* llamamos a la propiedad estatica props */}
      <p>Contador de {props.titulo}</p>
      <p>
        <b>{cuenta}</b>
      </p>
      <p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </p>
    </div>
  )
}

ContadorHooks.defaultProps = {
  titulo: 'Clicks'
}

export default ContadorHooks
