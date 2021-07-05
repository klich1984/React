import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(0),
      with: "auto"
    },
  }
}))

const Search = ({search, setSearch, setError}) => {
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
  }

  // the value attribute to have a controlled form
  return (
    <form
      className={clasess.root}
      autoComplete="on"
      onSubmit={handleSubmit}
      onReset={handleReset}
      style={{margin: "2rem 0"}}>
      <TextField
        id="anime"
        name="anime"
        label="anime"
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
  )
}

export default Search
