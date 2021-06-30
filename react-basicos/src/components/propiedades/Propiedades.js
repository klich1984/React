import React from 'react'
import PropTypes from 'prop-types'

export default function Propiedades(props){
  // console.log(props)
  return (
    <div>
      <hr />
      {/* <h2>propiedades</h2> */}
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
        <li>{props.arreglo.join(', ')}</li>
        <li>{props.objeto.curso + ' - ' + props.objeto.donde}</li>
        <li>{props.arreglo.map(props.funcion).join(', ')}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
      <hr />
    </div>
  )
}

// Las propiedades por defaul y el typo de dato Normalmente se realiza al final de desarrollar el componente
// Definir propiedades por defecto a nuestras propiedades por si no me la pasan
Propiedades.defaultProps = {
  porDefecto: 'Las Props de React'
}

// Definir el typo de dato y requerimientos(Si una propiedad es requerida o no)
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired
}
