import React from 'react'

const SongArtist = ({ artist }) => {
  return (
    <div className='song-artist'>
      <h3>{artist.strArtist}</h3>
      <figure className='container-figure'>
        <img src={artist.strArtistThumb} alt={artist.strArtist} />
        <figcaption>
          <p>
            {artist.intBornYear} - {artist.intDiedYear || 'Presente'}
          </p>
          <p>{artist.strCountry}</p>
          <p>
            {artist.strGenre} - {artist.strStyle}
          </p>
          <a
            href={`http://${artist.strWebsite}`}
            target='_blank'
            rel='noreferrer'
          >
            Sitio web Oficial
          </a>
        </figcaption>
      </figure>
      <div className='biography'>
        <h3>Biografia</h3>
        <p>{artist.strBiographyEN}</p>
      </div>
    </div>
  )
}

export default SongArtist
