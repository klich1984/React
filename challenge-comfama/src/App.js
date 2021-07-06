import { useState, useEffect } from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import Search from './components/Search'
import Error from './components/Error'
import Message from './components/Message'
import Cards from './components/cards/Cards'
import Loader from './components/Loader'


function App() {
  // init prop for search, request helps me clean up and get api errors
  let searchInit = {
    anime: '',
    request: false
  },
  myResponseInit = []

  // State variables
  const [search, setSearch] = useState(searchInit)
  // Store response
  const [myResponse, setMyResponse] = useState(myResponseInit)
  // help charge loader and errors
  const [error, setError] = useState(false)

  // Efect function
  useEffect(() => {

    // function has the logic, the requests to the apis
    const getData = async () => {
      const { anime } = search
      // console.log(anime)
      const newListAnime = []
      // try request and catch error handling
      try {
        let animeAPI = `https://api.jikan.moe/v3/search/anime?q=${anime}&limit=50`,
          animeRes = await fetch(animeAPI),
          animeJSON = await animeRes.json()
        animeJSON.results.forEach(anime => {
          let animes = {
            id: anime.mal_id,
            name: anime.title,
            avatar: anime.image_url,
            score: anime.score,
            url: anime.url
          }
          newListAnime.push(animes)
        })
        setMyResponse(newListAnime)

      } catch (error) {
        // console.log(error)
        setSearch({
          anime,
          request: false
        })

      setError(true)
      }
    }

    // To exit the effect if there is an error and if the request is positive we execute the getData function
    if(!search.request) {
      return
    } else {
      getData()
    }
  }, [search])

  return (
    <HashRouter basename="/">
      <CssBaseline>
        <div className="App">
          <Header />
          <main className="App-main">
            <Search
              search={search}
              setSearch={setSearch}
              setMyResponse={setMyResponse}
              setError={setError}/>
            {
              (!search.request)
                ? (error
                    ? <Error search={search} />
                    : <Message />
                  )
                : (myResponse.length === 0)
                  ? <Loader />
                  : <Cards listAnime={myResponse}/>
            }
          </main>
        </div>
      </CssBaseline>
    </HashRouter>
  );
}

export default App;
