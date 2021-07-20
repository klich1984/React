const selectScoreRange = function (score) {
  if (score >= 1 && score < 5) {
    return <h3>I do not recommend it</h3>
  } else if (score >= 5 && score < 8) {
    return <h3>You may have fun</h3>
  } else if (score >= 8) {
    return <h3>Great, this is one of the best anime</h3>
  } else {
    return <h3>No punctuation</h3>
  }
}

export default selectScoreRange
