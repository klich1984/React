import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, delFromCart } from '../actions/shoppingActions'
import CartItem from './CartItem'
import ProductItem from './ProductItem'

const ShoppingCart = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  // console.log('State', state, dispatch)
  const { products, cart } = state.shopping

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
      <article className='box'>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  )
}

export default ShoppingCart
