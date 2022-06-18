import Contador from './components/Contador'
import ContadorMejorado from './components/ContadorMejorado'
import CrudApi from './components/CrudApi'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <div className='App'>
      <h1>react useReducer</h1>
      <hr />
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  )
}

export default App
