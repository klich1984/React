import React from 'react'
import Message from './Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null

  return (
    <>
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message
          bgColor={'#d63545'}
          msg={`Error: No existe la Canción "<em>${search.song}</em>"`}
        />
      ) : (
        <SongLyric title={search.song} lyric={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]}/>
      ) : (
        <Message
          msg={`No existe el interprete '<em>${search.artist}</em>'`}
          bgColor={'#d63545'}
        />
      )}
    </>
  )
}

export default SongDetails
