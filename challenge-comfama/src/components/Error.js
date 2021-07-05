import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'


const Error = ({ search }) => {

  return (
    <>
      <Alert
        severity="error"
        style={{margin: "2rem auto", maxWidth: 752, fontSize: "1rem"}}
        >
        <AlertTitle>Error</AlertTitle>
          There was a problem consulting the Anime:
        <ul>
          <li><b>{search.anime}</b></li>
        </ul>
          Try again
      </Alert>
    </>
  )
}

export default Error
