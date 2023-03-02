import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameEnd} = props

  return (
    <div className="navbar-container">
      <div className="logo-title-name">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {isGameEnd && null}
      {!isGameEnd && (
        <div className="score-container">
          <p className="score">
            Score: <span className="score-value">{currentScore}</span>
          </p>
          <p className="score">
            Top Score: <span className="score-value">{topScore}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default NavBar
