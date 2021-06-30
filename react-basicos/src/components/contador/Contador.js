import React, { Component } from 'react'

/////////////// mediante el metodo blind ////////////////////////
// export default class Contador extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cuenta: 0
//     }
//     // Al ser un componente de clase se debe enlazar el this de la clase al metodo y se puede hacer mediante el constructor asi o con una arrow function
//     this.sumar = this.sumar.bind(this)
//     this.restar = this.restar.bind(this)
//   }

//   sumar() {
//     // Recordar que el estado es inmutable por lo que se usa el metodo setState
//     this.setState({
//       // La propiedad cuenta del estado state aumenta el valor que ya tiene mas 1
//       cuenta: this.state.cuenta + 1
//     })
//   }

//   restar() {
//     // Recordar que el estado es inmutable por lo que se usa el metodo setState
//     this.setState({
//       // La propiedad cuenta del estado state aumenta el valor que ya tiene mas 1
//       cuenta: this.state.cuenta - 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <p>Contador</p>
//         <p>
//           <b>{this.state.cuenta}</b>
//         </p>
//         <p>
//           <button onClick={this.sumar}>+</button>
//           <button onClick={this.restar}>-</button>
//         </p>
//       </div>
//     )
//   }
// }

///////////// property initializer para inicializar propiedades sin necesidad de constructor /////////////////////
export default class Contador extends Component {
  // property initializer y metodos con arrow Function
  state = {
    cuenta: 0
  }
  // Propiedad estatica
  static defaultProps = {
    titulo: 'Clicks'
  }
  // Arrow Function (ereda el contexto del this del elemento padre)
  sumar = () => {
    // Recordar que el estado es inmutable por lo que se usa el metodo setState
    this.setState({
      // La propiedad cuenta del estado state aumenta el valor que ya tiene mas 1
      cuenta: this.state.cuenta + 1
    })
  }

  restar = () => {
    // Recordar que el estado es inmutable por lo que se usa el metodo setState
    this.setState({
      // La propiedad cuenta del estado state aumenta el valor que ya tiene mas 1
      cuenta: this.state.cuenta - 1
    })
  }

  render() {
    return (
      <div>
        {/* llamamos a la propiedad estatica props */}
        <p>Contador de {this.props.titulo}</p>
        <p>
          <b>{this.state.cuenta}</b>
        </p>
        <p>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </p>
      </div>
    )
  }
}