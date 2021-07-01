import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Acerca from '../../pages/Acerca'
import Error404 from '../../pages/Error404'
import Home from '../../pages/Home'

export const RuteoBasico = () => {
  return (
    <Router>
      <h2>Ruteo Basico</h2>
      <header>
        <nav>
          <Link to="/" className="App-link">
            Home
          </Link>
          <span>-</span>
          <Link to="/acerca" className="App-link">
            Acerca
          </Link>
          <span>-</span>
          <Link to="/contacto" className="App-link">
            Contacto
          </Link>
          <span>-</span>
          <Link to="/no-existe" className="App-link">
            No existe
          </Link>
        </nav>
      </header>
      <main>
        <Switch>
          {/* el path es la ruta que quiere que carge, component es lo que quiero cargar, el paramtro exact le dice que la ruta va ser unicamente la que definimos*/}
          <Route exact path="/" component={Home} />
          {/* Segunda forma  */}
          <Route exact path="/acerca">
            <Acerca />
          </Route>
          {/* Otra forma es pasarle un children que recibe cualquier cosa (un codigo htyml), cadena, numero, componentes de react, etc  */}
          <Route path="/contacto" children={<h3>Contacto</h3>}/>
          {/* Otra forma, de esta manera se llama cualquier otra pagina que no exista y tambien se puede llamar un componente como children asi */}
          <Route path="*" children={<Error404 />} />
        </Switch>
      </main>
    </Router>
  )
}
