const CartItem = ({ data, delFromCart }) => {
  // console.log(data)
  const { id, name, price, quantity } = data
  return (
    <div style={{ borderBottom: 'thin solid gray', padding: '1rem' }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <br />
      <button onClick={delFromCart}>Eliminar un producto</button>
      <button onClick={delFromCart}>Eliminar todos los productos</button>
    </div>
  )
}

export default CartItem
