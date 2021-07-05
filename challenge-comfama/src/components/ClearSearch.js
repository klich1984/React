import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  clear: {
    display: "flex",
    paddingLeft: "47px",

    "& h3": {
      alignSelf: "center"
    }
  }
})


function ClearSearch({ setSearch, setMyResponse }) {
  const clasess = useStyles()
  // search reset
  const handleReset = () => {
    // alert("reseteando")
    setSearch({
      anime: '',
      request: false
    })
    // reset Request Variable
    setMyResponse([])
  }

  return (
    <div className={clasess.clear}>
      <h2>Clear Search</h2>
      <IconButton color="primary" type="reset" onClick={handleReset}>
        <ClearTwoToneIcon fontSize="large"/>
      </IconButton>
    </div>
  )
}

export default ClearSearch
