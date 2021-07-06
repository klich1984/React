import React, { useState } from 'react'
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

  let initialBreackPoint = [
    { width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2, itemsToScroll: 2},
    { width: 850, itemsToShow: 5, itemsToScroll: 5},
    { width: 1750, itemsToShow: 6, itemsToScroll: 6 },
  ]

  const [breackPoint, setBreackPoint] = useState(initialBreackPoint)

  return (
    <>
      <div className={clasess.root} color="primary">

        <Carousel breakPoints={breackPoint}>
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
