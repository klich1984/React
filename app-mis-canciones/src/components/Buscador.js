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


const Buscador = (props) => {
  // VAriable que guardara el Hook personalixzado de stilos
  const clasess = useStyles()
  return (
    // quitar el novalidate para que no me envie el formulario vacio y el autocomplete a on
    <form className={clasess.root} autoComplete="on">
      <IconButton color="primary" type="reset">
          <Homelcon />
      </IconButton>
      <TextField
        id="artist"
        name="artist"
        label="Artista"
        variant="outlined"
        size="medium"
        required />
      <TextField
        id="song"
        name="song"
        label="Canción"
        variant="outlined"
        size="medium"
        required />
        <IconButton color="primary" type="submit">
          <SearchIcon />
        </IconButton>
    </form>
  )
}

export default Buscador
