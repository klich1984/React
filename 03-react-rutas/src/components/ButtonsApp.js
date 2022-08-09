import React from 'react'

const ButtonsApp = ({
  setShowRouter,
  setShowHasRouter,
  setShowSongsearch,
  setShowCrudApi,
  handleRoute,
}) => {
  const handleClick = (nameFunction, handleRoute) => {
    handleRoute()
    // Reset values
    setShowRouter(false)
    setShowHasRouter(false)
    setShowSongsearch(false)
    setShowCrudApi(false)
    switch (nameFunction) {
      case 'router':
        setShowRouter(true)
        break
      case 'has':
        setShowHasRouter(true)
        break
      case 'song':
        setShowSongsearch(true)
        break
      case 'api':
        setShowCrudApi(true)
        break
      default:
        break
    }
  }

  return (
    <section className='app-buttons'>
      <button onClick={() => handleClick('router', handleRoute)}>
        Ver rutas con Router
      </button>
      <button onClick={() => handleClick('has', handleRoute)}>
        Ver rutas con HasRouter
      </button>
      <button onClick={() => handleClick('api', handleRoute)}>
        Ver App Crud Api
      </button>
      <button onClick={() => handleClick('song', handleRoute)}>
        Ver App Song Search
      </button>
    </section>
  )
}

export default ButtonsApp
