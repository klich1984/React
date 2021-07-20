import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'


const useStyles = makeStyles({
  text: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
  }
})


const Message = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h5" component="h2" className={classes.text}>
        Search for your favorite anime
      </Typography>
    </div>
  )
}

export default Message
