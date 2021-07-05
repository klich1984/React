import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
// import HomeIcon from '@material-ui/icons/Home'
// import IconButton from '@material-ui/core/IconButton'


const Error = () => {

  return (
    <>
    <Alert
      severity="error"
      style={{maxWidth:752, margin:"2rem auto 0"}}>
        <AlertTitle>Error</AlertTitle>
        <p>
          Recurso <b><i>Anime</i></b> no encontrado
        </p>
    </Alert>
    {/* <div style={{margin: "1rem auto", textAlign: "center"}}> */}
      {/* <Link to="/"> */}
        {/* <IconButton color="primary" > */}
          {/* <HomeIcon /> */}
        {/* </IconButton> */}
      {/* </Link> */}
    {/* </div> */}
    </>
  )
}

export default Error
