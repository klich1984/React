import contadorReducer from './contadorReducer'
import { shoppingReducer } from './shoppingReducer'
// import { crudReducer } from "./crudReducer";

const reducer = {
  contador: contadorReducer,
  shopping: shoppingReducer,
  // crud: crudReducer,
}

export default reducer
