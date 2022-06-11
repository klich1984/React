import { memo, useMemo } from 'react'

const ContadorHijo = ({ contador, sumar, restar }) => {
  // let superNumero = 0
  // Se conoce como computed property, lo que se hace es memorizar este valor calculado
  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++
  // }
  // se memoriza un valor dado un proceso
  const superNumero = useMemo(() => {
    let numero = 0

    for (let i = 0; i < 1000000000; i++) {
      numero++
    }

    return numero
  }, [])

  console.log('Hijo del contador se renderiza')
  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Contador Hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  )
}
// para memorizar se debe envolver dentro de usememo el componente que se queira memorizar
export default memo(ContadorHijo)
