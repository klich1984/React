const PrivateRoute = () => {
  // console.log(props)
  return (
    <div className='section-page'>
      <h3>
        Página de <i>Dashboard</i>
      </h3>
      <p>
        Se está renderizando la página de{' '}
        <b>
          <i>Dashboard</i>
        </b>
        , con la ruta <b>"/dashboard"</b>
      </p>
    </div>
  )
}

export default PrivateRoute
