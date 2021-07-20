import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import ClearSearch from './ClearSearch'

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
    display: "flex",
    paddingLeft: "47px"
  }
}))

const Search = ({search, setSearch, setMyResponse, setError}) => {
  const clasess = useStyles()

  // Form handling
  const handleSubmit = (e) => {
    e.preventDefault()

    setSearch({
      anime: e.target.anime.value,
      request: true
    })

    setError(false)
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
      {
        (!search.request)
          ? null
          : <ClearSearch setSearch={setSearch} setMyResponse={setMyResponse}/>
      }
    </div>
  )
}

export default Search
