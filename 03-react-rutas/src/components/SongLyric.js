import React from 'react'

const SongLyric = ({ title, lyric }) => {
  return (
    <div>
      <h3>Titulo: {title}</h3>
      <h3>Letra</h3>
      <blockquote style={{ whiteSpace: 'pre-wrap' }}>{lyric}</blockquote>
    </div>
  )
}

export default SongLyric
