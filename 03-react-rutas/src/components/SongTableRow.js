import { useNavigate } from 'react-router-dom'

const SongTableRow = ({ el, id, handleDeleteSong }) => {
  console.log(el)

  let navigate = useNavigate()
  return (
    <tr>
      <td>
        <img src='https://placeimg.com/40/40/animals' alt='' />
      </td>
      <td>Nombre Artista</td>
      <td>Nombre Canción</td>
      <td>
        <button onClick={() => navigate(`/canciones/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default SongTableRow
