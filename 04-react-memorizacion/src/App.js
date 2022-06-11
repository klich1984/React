import Contador from './components/Contador'

function App() {
  return (
    <div className='App'>
      {/* Se usa para optimizar la app, pero se debe hacer con cuidado por que se puede llegar a lograr lo contrario */}
      <h1>Memorización con React</h1>
      <hr />
      <h2>Teoria</h2>
      <a
        href='https://es.reactjs.org/docs/react-api.html#reactmemo'
        target='_blank'
        rel='noreferrer'
      >
        memo
      </a>
      <ul>
        <li>Se encarga de memorizar un componente,</li>
        <li>
          Lo vuelve a memorizar al momento de que sus <b>props</b> cambian.
        </li>
        <li>Evita re-renderizados.</li>
        <li>
          Hay que evitarlo en la medida de lo posible, pues podría ser más
          costosa la tarea de memorización que el re-renderizado del componente.
        </li>
        <li>
          Úsalo, cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista.</li>
            <li>Llamamos datos de APIs.</li>
            <li>Un componente se vuelve muy pesado.</li>
            <li>Salen alertas de rendimiento en la consola.</li>
          </ul>
        </li>
      </ul>
      <hr />
      <Contador />
    </div>
  )
}

export default App
