import { useReducer } from 'react'

const initialState = { contador: 0 }

const TYPES = {
  INCREMENT: 'INCREMENT',
  INCREMENT_5: 'INCREMENT_5',
  DECREMENT: 'DECREMENT',
  DECREMENT_5: 'DECREMENT_5',
  RESET: 'RESET',
}

function reducer(state, action) {
  // Se acostumbra usar el switch
  switch (action.type) {
    case TYPES.RESET:
      return initialState
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload }
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 }
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload }
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 }
    default:
      return state
  }
}

const Contador = () => {
  // const [contador, setContador] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState)

  // const sumar = () => setContador(contador + 1)
  const sumar = () => dispatch({ type: TYPES.INCREMENT })

  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 })

  // const restar = () => setContador(contador - 1)
  const restar = () => dispatch({ type: TYPES.DECREMENT, payload: 0 })

  const reset = () => dispatch({ type: TYPES.RESET })

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 })

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador
