import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: "2rem auto"
  },
  lyrics: {
    // Prewarp para que no se ponga todo en una linea y lea los saltos de linea
    whileSpace: "pre-wrap !imporntant"
  },
  title: {
    marginBottom: "3rem !important"
  },
  media: {
    backgroundSize: "cover",
    height: "50vh"
  },
  addBtn: {
    justifyContent: "flex-end"
  }
})

const Letra = ({
  currentSong,
  setCurrentSong,
  mySongs,
  setMySongs,
  setSearch
}) => {
  // para las clases
  let classes = useStyles()

  // Para guardar en el localstorage
  const handleClick = e => {
    // alert("Guardar cancion")
    // setMySongs va ser igual a lo que ya tiene mySongs en el estado + la cancion actual, Le pasa al padre la informacion
    setMySongs(mySongs => [...mySongs, currentSong])
    // Limpiamos el formulario de busqueda
    setSearch({
      artist: '',
      song: '',
      request: false
    })
    // Mantener la vista que busque
    setCurrentSong({})
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={currentSong.avatar}
          title={currentSong.artist}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={classes.title}>
            {currentSong.artist} - {currentSong.song}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.lyrics}>
            {currentSong.lyrics}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.addBtn}>
        <Button size="large" color="primary" onClick={handleClick}>
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

export default Letra
