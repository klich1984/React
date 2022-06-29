const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  // console.log(data)
  const { id, name, price, quantity } = data
  return (
    <div style={{ borderBottom: 'thin solid gray', padding: '1rem' }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <br />
      <button onClick={() => delOneFromCart(id)}>Eliminar un producto</button>
      <button onClick={() => delAllFromCart(id, true)}>
        Eliminar todos los productos
      </button>
    </div>
  )
}

export default CartItem
