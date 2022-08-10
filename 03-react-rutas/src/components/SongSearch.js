import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'
import { helpHttp } from '../helpers/helpHttp'
import Error404 from '../pages/Error404'
import SongPage from '../pages/SongPage'
import Loader from './Loader'
import SongDetails from './SongDetails'
import SongForm from './SongForm'
import SongTable from './SongTable'

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [] // Leer del Local Storage

const SongSearch = () => {
  // Variables de estado
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mySongs, setMySongs] = useState(mySongsInit) // Variable del Local Store

  useEffect(() => {
    if (search === null) return

    const fetchData = async () => {
      const { artist, song } = search

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

      setLoading(true)

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ])

      // console.log(artistRes, songRes)
      setBio(artistRes)
      setLyric(songRes)
      setLoading(false)
    }

    fetchData()

    // Establecer la data en el localstorage
    localStorage.setItem('mySongs', JSON.stringify(mySongs))
  }, [search, mySongs])

  const handleSearch = (data) => {
    // console.log(data)
    setSearch(data)
  }

  const handleSaveSong = () => {
    // alert('Guardando canción en favoritos')
    let currentSong = {
      search,
      lyric,
      bio,
    }

    let songs = [...mySongs, currentSong]
    // Lo que ya tiene la variable mySong con currentSong
    setMySongs(songs)
    setSearch(null)
    localStorage.setItem('mySongs', JSON.stringify(songs))
  }
  const handleDeleteSong = (id) => {
    // alert(`Eliminando el id: ${id}`)
    let isDelete = window.confirm(
      `estas seguro de eliminar la canción con el id: "${id}"`
    )

    if (isDelete) {
      // Cuando el index sea diferente del id, lo va a agregar a my song
      let songs = mySongs.filter((el, index) => index !== id)
      setMySongs(songs)
      localStorage.setItem('mySongs', JSON.stringify(songs))
    }
  }

  return (
    <div className='song-search'>
      <Router>
        <header className='section-page'>
          <h2>App Song Search</h2>
          <p>Busca tus canciones favoritas y agregalas a lista de favoritas</p>
          <NavLink to='/'>Home</NavLink>
        </header>
        {loading && <Loader />}
        <article className='grid-1-2'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />
            <Route path='/:id' element={<SongPage mySongs={mySongs} />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </article>
      </Router>
    </div>
  )
}

export default SongSearch
