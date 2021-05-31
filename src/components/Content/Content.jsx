import React, { useState } from "react";
import Player1 from "../Players/Player-1";
import Player2 from "../Players/Player-2";

import styles from "./Content.module.css";

const Content = () => {
  const [showDice, setShowDice] = useState(false);
  const [curDice, setCurDice] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [isWinner, setIsWinner] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const diceImg = require(`../../assets/images/dice-${curDice}.png`).default;

  const rollDiceHandler = () => {
    if (isPlaying) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      setShowDice(true);
      if (dice !== 1) {
        setCurDice(dice);
        setCurrentScore((prevState) => (prevState += dice));
      } else {
        switchHandler();
      }
    }
  };

  const switchHandler = () => {
    setCurrentScore(0);
    setActivePlayer((prevState) => (prevState === 0 ? 1 : 0));
  };

  const holdHandler = () => {
    if (isPlaying) {
      scores[activePlayer] += currentScore;
      if (scores[activePlayer] >= 10) {
        setIsWinner(true);
        setShowDice(false);
        setIsPlaying(false);
      } else {
        switchHandler();
      }
    }
  };

  const newGameHandler = () => {
    setShowDice(false);
    setCurDice(1);
    setCurrentScore(0);
    setActivePlayer(0);
    setScores([0, 0]);
    setIsWinner(false);
    setIsPlaying(true);
  };

  return (
    <div className={styles.content}>
      {activePlayer === 0 ? (
        <Player1
          active={true}
          score={currentScore}
          totalScore={scores[0]}
          winner={isWinner}
        />
      ) : (
        <Player1 score={0} totalScore={scores[0]} />
      )}
      {activePlayer === 1 ? (
        <Player2
          active={true}
          score={currentScore}
          totalScore={scores[1]}
          winner={isWinner}
        />
      ) : (
        <Player2 score={0} totalScore={scores[1]} />
      )}

      <img
        src={diceImg}
        alt="Playing dice"
        className={styles.dice}
        style={{ visibility: showDice ? "visible" : "hidden" }}
      />
      <button
        className={`${styles.btn} ${styles.btnNew}`}
        onClick={newGameHandler}
      >
        New game
      </button>
      <button
        className={`${styles.btn} ${styles.btnRoll}`}
        onClick={rollDiceHandler}
      >
        Roll dice
      </button>
      <button
        className={`${styles.btn} ${styles.btnHold}`}
        onClick={holdHandler}
      >
        Hold
      </button>
    </div>
  );
};

export default Content;
