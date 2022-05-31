import React from 'react'

const SongArtist = ({ artist }) => {
	return (
		<div>
			<h3>{artist.strArtist}</h3>
			<img src={artist.strArtistThumb} alt={artist.strArtist} />
			<p>
				{artist.intBornYear} - {artist.intDiedYear || 'Presente'}
			</p>
			<p>{artist.strCountry}</p>
			<p>{artist.strGenre} - {artist.strStyle}</p>
			<a href={`http://${artist.strWebsite}`} target="_blank" rel='noreferrer'>Sitio web Oficial</a>
			<p>{artist.strBiographyEN}</p>
		</div>
	)
}

export default SongArtist
