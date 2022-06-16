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

  const delFromCart = () => {}

  const clearCart = () => {}

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
      <article className='box'>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
        <button onClick={clearCart}>Limpiar Carrito</button>
      </article>
    </div>
  )
}

export default ShoppingCart
