import React, { Component } from 'react'

export default class Reloj extends Component {
  constructor(props) {
    super(props)
    console.log(0, 'El componente se inicializa aun no esta en el DOM')
    // Creamos un objeto al estado
    this.state = {
      date: new Date().toLocaleTimeString()
    }
    // Variable para poder parar el metodo del setTime
    this.timer = null
  }

  // Se invoca inmediatamente cuando se inserta en el DOM, momento indicado para suscribirsi a una peticion externa
  componentDidMount() {
    console.log(1, 'El componente ya se encuentra en el DOM')
  }

  // hace que el metodo render vuelva a ejecutarse y si queremos ejecutar algo cuando se realice un cambio, recibe dos parametros las propiedades previas y el estado previo
  componentDidUpdate(prevProps, prevState) {
    console.log(2, 'El estado o las props del componente han cambiado')
    console.log(prevProps, prevState)
  }

  // Fase de eliminacion
  componentWillUnmount() {
    console.log(3, 'El componente se ha eliminado del DOM')
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  // Metodos de clase
  start = () => {
    this.tictac()
  }
  // Cancela el setInterval
  stop = () => {
    clearInterval(this.timer)
  }

  // dibuja o redibuja por cualqueir cambio
  render() {
    console.log(4, 'El componente se dibuja (o redibuja por algun cambio) en el DOM')
    return (
      <>
        <div>{this.state.date}</div>
        <button onClick={this.start}>Iniciar</button>
        <button onClick={this.stop}>Detener</button>
      </>
    )
  }
}
