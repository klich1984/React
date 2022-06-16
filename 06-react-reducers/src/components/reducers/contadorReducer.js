import { TYPES } from '../../actions/contadorActions'

export const contadorInitialState = { contador: 0 }

export const contadorInit = () => {
  return {
    contador: contadorInitialState.contador + 100,
  }
}

export function contadorReducer(state, action) {
  // Se acostumbra usar el switch
  switch (action.type) {
    case TYPES.RESET:
      return contadorInitialState
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
