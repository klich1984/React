import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Homelcon from '@material-ui/icons/Home'

// Construccion de los estilos
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(0),
      with: "auto"
    }
  }
}))

// mediante destrucuturacion recibimos las props, setSearch es la funcion que actualiza la variable anterior
// asi es como le podemos pasar parametros de hijo a padre
const Buscador = ({search, setSearch, setError}) => {
  // VAriable que guardara el Hook personalixzado de stilos
  const clasess = useStyles()

  const handleSubmit = (e) => {
    // alert("enviando")
    // console.log("evento", e)
    // Evitamos la accion por defecto de enviar el formulario
    e.preventDefault()
    // Si el formulario se procesa le enviaremos los datos
    // ejecuta la funcion setSearch y esta recibe un objeto
    setSearch({
      artist: e.target.artist.value,
      song: e.target.song.value,
      request: true
    })
  }

  const handleReset = e => {
    // alert("reseteando")
    setSearch({
      artist: '',
      song: '',
      request: false
    })

    setError(false)
  }
  return (
    // quitar el novalidate para que no me envie el formulario vacio y el autocomplete a on
    // Es de tipo reset que me ayuda a resetear el formulario y me envia a la pagina del home
    // formulario controlado
    <form
      className={clasess.root}
      autoComplete="on"
      onSubmit={handleSubmit}
      onReset={handleReset}>
      <IconButton color="primary" type="reset">
          <Homelcon />
      </IconButton>
      <TextField
        id="artist"
        name="artist"
        label="Artista"
        variant="outlined"
        size="medium"
        value={search.artist}
        onChange={e => {
          setSearch({
            ...search,
            artist: e.target.value,
            request: false
          })
        }}
        required />
      <TextField
        id="song"
        name="song"
        label="Canción"
        variant="outlined"
        size="medium"
        value={search.song}
        onChange={e => {
          setSearch({
            ...search,
            song: e.target.value,
            request: false
          })
        }}
        required />
        <IconButton color="primary" type="submit">
          <SearchIcon />
        </IconButton>
    </form>
  )
}

export default Buscador
