import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'
import Homelcon from '@material-ui/icons/Home'

//Estilos
const useStyle = makeStyles({
  root: {
    maxWidth: 800,
    margin: "2rem auto"
  },
  lyrics: {
    whiteSpace: "pre-wrap !important"
  },
  title: {
    marginBottom: "3rem !important"
  },
  media: {
    backgroundSize: "cover",
    height: "50vh"
  },
  goHome: {
    justifyContent: "center"
  }
})

const Cancion = ({ mySongs }) => {
  // Estilos
  const classes = useStyle()
  // console.log(mySongs)

  // Saco el id
  let { id } = useParams(),
    song = mySongs[id]
  // console.log(useParams)
  // Solo mostrar la del id que me interesa

  return (
    <Card className={classes.root}>
      <CardActions className={classes.goHome}>
        <Button
          size="large"
          color="primary"
          component={Link}
          to="/">
          <Homelcon />
          Home
        </Button>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={song.avatar}
        title={song.artist}/>
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.title}>
            {song.artist} - {song.song}
          </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.lyrics}>
            {song.lyrics}
          </Typography>
      </CardContent>
    </Card>
  )
}

export default Cancion
