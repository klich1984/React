const calcStoreTotal = (animes) => {
  let score = 0
  animes.map(anime => {
    score += anime.score
  })
  console.log(score / animes.length)
  return score / animes.length
}

export default calcStoreTotal
