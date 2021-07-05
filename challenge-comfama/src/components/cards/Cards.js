import React from 'react'
import './Carrusel.css'
import { makeStyles } from '@material-ui/core/styles'
import Card from '../Card'
import Carousel from 'react-elastic-carousel'


const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "3%",
    justifyContent: "space-between",
  }
})

function Cards({ listAnime }) {
  const clasess = useStyles()

  return (
    <>
      <div className={clasess.root} color="primary">

        <Carousel itemsToShow={5} itemsToScroll={5}>
          {
            listAnime.map(card => (
              <Card
                key={card.id}
                title={card.name}
                score={card.score}
                image_url={card.avatar}
                url={card.url}/>
            ))
          }
        </Carousel>
      </div>
  </>
  )
}

export default Cards
