import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import LaunchIcon from '@material-ui/icons/Launch'
import Alert from '@material-ui/lab/Alert'
import AlertDialog from './AlertDialog'

// Estilos
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    margin: "auto",
    marginTop: "2rem"
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  alert: {
    fontSize: "1.5rem",
    justifyContent: "center",
    alignItems: "center"
  }
}))


const ListaCanciones = ({ mySongs, setMySongs }) => {
  // Estilos
  const classes = useStyles()

  const deleteSong = id => {
    // alert("Eliminar cancion")
    // Metodo filter para excluir la cancion y luego actualizar el arreglo en el estado
    // Si el index es igual al elemento lo va excluir si no pasa el elemento
    let songs = mySongs.filter((el, index) => index !== id)
    // Ya tengo un arreglo sin la cancion que quiero eliminar
    setMySongs(songs)
    localStorage.setItem("mySongs", JSON.stringify(songs))
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        {mySongs.length === 0
          ? (<Alert className={classes.alert} severity="error">
              No tiene canciones Guardadas
            </Alert>)
          : (<List>
              {
                // la misma posicion del elemento como index
                mySongs.map((el, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar alt={el.artist} src={el.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={el.song} secondary={el.artist}/>
                    <ListItemSecondaryAction>
                      {/* Para que el Boton funcione con react Router se debe agregar las propiedades component y to (Esta en la documentacion) */}
                      <IconButton
                        edge="end"
                        component={Link}
                        to={`/cancion/${index}`}>
                          <LaunchIcon />
                        </IconButton>
                        <AlertDialog id={index} deleteSong={deleteSong}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              }
            </List>)}
      </div>
    </div>
  )
}

export default ListaCanciones
