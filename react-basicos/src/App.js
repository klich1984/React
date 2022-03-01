import { useState } from 'react';
import logo from './logo.svg'
import './App.css'
import Componente from './components/componente/Componente'
import Propiedades from './components/propiedades/Propiedades'
import Estado from './components/estado/Estado'
import RenderizadoCondicional from './components/renderizadoCondicional/RenderizadoCondicional'
import Listas from './components/listas/Listas'
import Contador from './components/contador/Contador'
import Reloj from './components/reloj/Reloj'
import Api from './components/api/Api'
import ContadorHooks from './components/contador/ContadorHooks'
import RelojHooks from './components/reloj/RelojHooks'
import ApiHooks from './components/api/ApiHooks';
// eslint-disable-next-line no-unused-vars
import SpacingGrid from './components/response/SpacingGrid';
// eslint-disable-next-line no-unused-vars
import Application from './components/GuiaTelefonica/GuiaTelefonica';
// eslint-disable-next-line no-unused-vars
import Application2 from './components/GuiaTelefonica/Coderbyte';
// eslint-disable-next-line no-unused-vars
import Home from "./components/UseContext/Home";
// eslint-disable-next-line no-unused-vars
import About from "./components/UseContext/About";
// eslint-disable-next-line no-unused-vars
import ThemeContext from './context/ContextoGeneral';
import HooksPersonalizados from './components/customHooks/HooksPersonalizados';
import AjaxHooks from './components/ajax/AjaxHooks';
import Referencias from './components/referencias/Referencias';
import Formularios from './components/formularios/Formularios';
import Estilos from './components/estilos/Estilos';
import ComponentesEstilizados from './components/componentesEstilizados/ComponentesEstilizados';

function App() {
  const [reloj, setReloj] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> salva y recarga.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprende React
          </a>
        </section>
        <section>
          <Componente name="klich84" msg="soy un componente de" />
          {/* <Componente></Componente> */}
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ curso: "React", donde: "EscuelaIT" }}
            funcion={num => num * num}
            elementoReact={<i>Esto es un elemento i de React</i>}
            componenteReact={
              <Componente name="Mundo" msg="Soy un componente pasado como prop de" />
            }
          />
          {/* para ver lo que me devuelve el componente */}
          {/* {console.table(Propiedades)} */}
          <Estado />
          <RenderizadoCondicional />
          <Listas />
          <hr />
        </section>
        <section>
          <h2>Eventos</h2>
          <Contador />
          <Contador titulo="Likes"/>
        </section>
        <section>
          <hr />
          <h2>Ciclo de Vida de los componentes</h2>
          {reloj ? <Reloj /> : null}
          <br />
          <br />
          <hr />
        </section>
        <section>
          <h2>Consumo de Datos</h2>
          <Api />
          <br />
          <hr />
        </section>
        <section>
          <h2>Hooks</h2>
          <ContadorHooks />
          <ContadorHooks titulo="Likes"/>
          {reloj ? <RelojHooks /> : null}
          <br />
          <button onClick={() => setReloj(!reloj)}>{reloj ? "ocultar relojes" : "Mostrar relojes"}</button>
          <ApiHooks />
          <br />
          <hr />
          <HooksPersonalizados />
          <hr />
          <AjaxHooks />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <br />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
        </section>
      </header>

    </div>
  );
}

export default App;
