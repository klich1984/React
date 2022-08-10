import { useContext } from 'react'
import LocalStorageContext from '../context/LocalStorajeContext'
import SongTableRow from './SongTableRow'

const SongTable = ({ handleDeleteSong }) => {
  const { mySongs } = useContext(LocalStorageContext)

  return (
    <div className='song-table'>
      <h3>Mis Canciones Favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan='2'>Artista</th>
            <th>Canción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan='4'>Sin canciones favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default SongTable
