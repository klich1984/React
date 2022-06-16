import { useReducer } from 'react'
import { TYPES } from '../actions/shoppingActions'
import CartItem from './CartItem'
import ProductItem from './ProductItem'
import {
  shoppingInitialState,
  shoppingReducer,
} from './reducers/shoppingReducer'

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  // console.log('State', state, dispatch)
  const { products, cart } = state

  const addToCart = (id) => {
    // console.log(id)
    // Llamar (desencadenar) la funcion del reducer
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  }

  const delFromCart = (id, all = false) => {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
  }

  const clearCart = (id) => {
    // alert('limpiar carrito')
    dispatch({ type: TYPES.CLEAR_CART })
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <button onClick={clearCart}>Limpiar Carrito</button>
      <article className='box'>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  )
}

export default ShoppingCart
