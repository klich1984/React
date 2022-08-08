import { useParams } from 'react-router-dom'

const Usuario = () => {
  // let params = useParams()
  // console.log(params)
  let { username } = useParams()
  return (
    <div className='section-page'>
      <h3>
        Página de perfil del <b>Usuario</b>
      </h3>
      <p>
        Se está renderizando la página de <b>perfil de usuario</b>, pasando por
        la `URL` el parametro del nombre del usuario, con la ruta{' '}
        <b>"/usuario/{username}"</b>
      </p>
      <p>
        Su nombre de usuario es: <b className='text-capitalize'>{username}</b>
      </p>
    </div>
  )
}

export default Usuario
