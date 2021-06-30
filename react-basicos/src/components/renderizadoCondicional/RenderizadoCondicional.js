import React, { Component } from 'react'

// A modo explicativo creo componentes dentro de este mismo componente

function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  )
}

function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  )
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      session: false
    }
  }

  render() {
    return (
      <div>
        <hr />
        <h2>Renderizado Condicional</h2>
        { this.state.session
          ? <Login />
          : <Logout />
        }
      </div>
    )
  }
}


