// import React, { Component } from 'react'
import React from 'react'

///////////////// Diferentes variantes para un mismo componente //////////////////////

///////////////// 1 componente de clase //////////////////////
// export default class Componente extends Component {
//   render() {
//     return (
//       // para omitir el div podemos usar una etiqueta vacia <></>o la etiqueta Fragment debe importarse <Fragment></Fragment>
//       <>
//         <h2>Hola {this.props.msg} React</h2>
//       </>
//     )
//   }
// }


///////////////// 2 Componente de función //////////////////////
// Sin destructuracion
// export default function Componente(props) {
//   // El return es como el render de un componente de clases
//   return <h2>Hola {props.name} {props.msg} React</h2>
// }

// Con destructuracion
// export default function Componente( {msg, name} ) {
//   // El return es como el render de un componente de clases
//   return <h2>Hola {name} {msg} React</h2>
// }

///////////////// 3 componente de función expresada //////////////////////
// mediante una funcion expresada
// const Componente = function( {name, msg} ) {
//   return <h2>Hola {name} {msg} React</h2>
// }

// mediante una arrow function
const Componente = ({name, msg})=> <h2>Hola {name} {msg} React</h2>
// Cuando son funciones expresadas no se exporta por default en la misma declaración
export default Componente
