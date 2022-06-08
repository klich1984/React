import React, { useState } from 'react'

const initialForm = {
  artist: '',
  song: '',
}

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm)
  const [IsDisabled, setIsDisabled] = useState(true)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.artist || !form.song) {
      window.alert('Datos Incompletos')
      setIsDisabled(true)
      return
    }

    handleSearch(form)
    // Limpiar el formulario
    setForm(initialForm)
    setIsDisabled(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='artist'
          placeholder='Nombre del intérpetre'
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type='text'
          name='song'
          placeholder='Nombre de la canción'
          onChange={handleChange}
          value={form.song}
        />
        <input type='submit' value='Enviar' />
        <input
          type='button'
          onClick={handleSaveSong}
          value='Agregar Canción'
          disabled={IsDisabled && 'disabled'}
        />
      </form>
    </div>
  )
}

export default SongForm
