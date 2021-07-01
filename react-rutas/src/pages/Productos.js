import React from 'react'
//  userRouteMatch es un Hook que me permite obtener las partes relativas del path de la URL
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom'

// Creacion componente a modo de ejemplo (Deberia de crearse como un componente aparte)
const Template = () => {
  let { id } = useParams()
  // console.log(id)

  return (
    <div>
      <h4>Producto {id}</h4>
    </div>
  )
}

const Productos = () => {
  // Usamos destructuracion para obtener el path y la URL
  let { path, url } = useRouteMatch()
  // console.log(useRouteMatch())

  return (
    <div>
      <h3>Productos</h3>
      <ul>
        <li>
          <Link to={`${url}/a`} className="App-link">
            Producto A
          </Link>
        </li>
        <li>
          <Link to={`${url}/b`} className="App-link">
            Producto B
          </Link>
        </li>
        <li>
          <Link to={`${url}/c`} className="App-link">
            Producto C
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un producto</h4>
        </Route>
        {/* Para elegir un producto, por medio del ruteo por parametro */}
        <Route path={`${path}/:id`} component={Template} />
      </Switch>
    </div>
  )
}

export default Productos
