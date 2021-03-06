import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'


const Error404 = () => {
  let url = useLocation()

  return (
    <>
    <Alert
      severity="error"
      style={{maxWidth:753, margin:"2rem auto 0"}}>
        <AlertTitle>Error 404</AlertTitle>
        <p>
          Recurso <b><i>{url.pathname}</i></b> no encontrado
        </p>
    </Alert>
    <div style={{margin: "1rem auto", textAlign: "center"}}>
      <Link to="/">
        <IconButton color="primary" >
          <HomeIcon />
        </IconButton>
      </Link>
    </div>
    </>
  )
}

export default Error404
