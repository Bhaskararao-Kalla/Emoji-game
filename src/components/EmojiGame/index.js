/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameEnd: false,
    topScore: 0,
  }

  finishGameAndChangeTopScore = newScore => {
    const {topScore} = this.state

    if (newScore > topScore) {
      this.setState({topScore: newScore, isGameEnd: true})
    }
  }

  onClickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojis} = this.state

    const isPresentedEmoji = clickedEmojis.includes(id)

    if (isPresentedEmoji) {
      this.finishGameAndChangeTopScore(clickedEmojis.length)
    } else {
      if (clickedEmojis.length === emojisList.length - 1) {
        this.finishGameAndChangeTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  reStartGame = () => {
    this.setState({clickedEmojis: [], isGameEnd: false})
  }

  renderWinOrLoseCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state

    const isWon = emojisList.length === clickedEmojis.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.reStartGame}
        score={clickedEmojis.length}
      />
    )
  }

  render() {
    const {isGameEnd, clickedEmojis, topScore} = this.state

    const currentScore = clickedEmojis.length

    return (
      <div className="app-bg-container">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />

        <div className="emoji-body-container">
          {isGameEnd ? this.renderWinOrLoseCard() : this.renderEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
