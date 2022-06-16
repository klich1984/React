import { useReducer } from 'react'
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
    console.log(id)
  }

  const delToCart = () => {}

  const clearToCart = () => {}

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
      <article className='box'></article>
    </div>
  )
}

export default ShoppingCart
