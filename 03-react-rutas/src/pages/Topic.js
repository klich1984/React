import React from 'react'
import { useParams } from 'react-router-dom'

const Topic = () => {
  let { topic } = useParams()

  return (
    <div className='section-page'>
      <h3 className='text-capitalize'>{topic}</h3>
      <p>
        Se está renderizando la página anidada de <b>{topic}</b>, con la ruta{' '}
        <b>"/react/{topic}"</b>
      </p>
    </div>
  )
}

export default Topic
