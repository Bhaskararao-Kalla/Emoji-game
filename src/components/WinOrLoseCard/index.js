// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  console.log(score)
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const status = isWon ? 'You Won' : 'You Lose'
  const scoreType = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-container">
      <div className="text-container">
        <h1 className="status">{status}</h1>
        <p className="score-type">{scoreType}</p>
        <p className="current-score">{score}/12</p>
        <button className="button" type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="image-status" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
