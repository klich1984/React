import React, { Component } from 'react'

// Se crea componente en este mismo archivo por mostrar ejemplo pero deberia de estar en un componente aparte
function EstadoAHijo(props){
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  )
}

export default class Estado extends Component {

  // Al usar clases lo correcto es definir un constructor el cual recibe las propiedades
  // y importante invocar el super y pasarle las propiedades

  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }

    setInterval(()=> {
      // El estado no se puede modificar directamente
      // this.state.contador ++ // No se puede
      this.setState({contador: this.state.contador + 1})
    }, 3000)
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador}/>
      </div>
    )
  }
}
