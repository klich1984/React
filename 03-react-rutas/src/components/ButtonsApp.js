import React from 'react'

const ButtonsApp = ({
  setShowRouter,
  setShowHasRouter,
  setShowSongsearch,
  setShowCrudApi,
}) => {
  const handleClick = (nameFunction) => {
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
      <button onClick={() => handleClick('router')}>
        Ver rutas con Router
      </button>
      <button onClick={() => handleClick('has')}>
        Ver rutas con HasRouter
      </button>
      <button onClick={() => handleClick('song')}>Ver App Song Search</button>
      <button onClick={() => handleClick('api')}>Ver App Crud Api</button>
    </section>
  )
}

export default ButtonsApp
