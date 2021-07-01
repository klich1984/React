import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

// A modso de ejemplo creamos un componente en el mismo archivo

const Template = () => {
  const { id } = useParams()
  console.log(id, useParams())
  return (
  <div>
    <h3>Este es el producto {id}</h3>
    <p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
			molestiae officia eligendi modi? Minima quidem pariatur nesciunt
			voluptatum reiciendis itaque est, porro, aliquam consequuntur
			laudantium, nisi perspiciatis explicabo eveniet voluptatem.
		</p>
  </div>
  )
}

const RuteoPorParametros = () => {
  return (
    <Router>
      <h2>Ruteo por parametros</h2>
      <nav>
        <Link to="/producto/1" className="App-link">
          Producto Uno
        </Link>
        <span>-</span>
        <Link to="/producto/2" className="App-link">
          Producto Dos
        </Link>
        <span>-</span>
        <Link to="/producto/3" className="App-link">
          Producto Tres
        </Link>
      </nav>
      {/* Un componente Router no puede ir por fuera de un componente Switch (/productos/:id/:name) */}
      <Switch>
        <Route path="/producto/:id"  component={Template}/>
      </Switch>
    </Router>
  )
}

export default RuteoPorParametros
