import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from './Card'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
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
  const maxSteps = listAnime.length
  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()

  // console.log(listAnime)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <>
      <div className={clasess.root}>

        <Carousel itemsToShow={5}>
          {
            listAnime.map(card => (
              <Card
                key={card.id}
                title={card.name}
                score={card.score}
                image_url={card.avatar}/>
            ))
          }
        </Carousel>
      </div>
  </>
  )
}

export default Cards
