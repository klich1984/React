import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone'

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem auto",

    "& > *": {
      margin: theme.spacing(0)
    },
  },
  form: {
    paddingLeft: "47px"
  },
  clear: {
    display: "flex",
    paddingLeft: "47px",

    "& h3": {
      alignSelf: "center"
    }
  }
}))

const Search = ({search, setSearch, setMyResponse, setError}) => {
  const clasess = useStyles()

  // Form handling
  const handleSubmit = (e) => {
    // console.log(e.target.anime.value)
    e.preventDefault()

    setSearch({
      anime: e.target.anime.value,
      request: true
    })

    // setTimeout(() => {
    //   handleReset()
    // }, 3000);
  }

  // search reset
  const handleReset = e => {
    // alert("reseteando")
    setSearch({
      anime: '',
      request: false
    })
    // reset Request Variable
    setMyResponse([])
  }

  // the value attribute to have a controlled form
  return (
    <div className={clasess.root}>
      <form
        className={clasess.form}
        autoComplete="on"
        onSubmit={handleSubmit}>
        <TextField
          id="anime"
          name="anime"
          label="Search anime"
          variant="outlined"
          size="medium"
          value={search.anime}
          onChange={e => {
            setSearch({
              ...search,
              anime: e.target.value,
              request: false
            })
          }}
          required />
          <IconButton color="primary" type="submit">
            <SearchIcon fontSize="large"/>
          </IconButton>
      </form>
      <div className={clasess.clear}>
          <h3>Clear Search</h3>
          <IconButton color="primary" type="reset" onClick={handleReset}>
            <ClearTwoToneIcon fontSize="large"/>
          </IconButton>
      </div>
    </div>
  )
}

export default Search
