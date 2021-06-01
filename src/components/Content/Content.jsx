import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Content.module.css";
import Players from "../Players/Players";
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
      <Players
        activePlayer={activePlayer}
        currentScore={currentScore}
        scores={scores}
        winner={isWinner}
      />

      <img
        src={diceImg}
        alt="Playing dice"
        className={styles.dice}
        style={{ visibility: showDice ? "visible" : "hidden" }}
      />

      <Button
        name={`New Game`}
        onClickHandler={newGameHandler}
        type={`new game`}
      />
      <Button name={`Roll`} onClickHandler={rollDiceHandler} type={`roll`} />
      <Button name={`Hold`} onClickHandler={holdHandler} type={`hold`} />
    </div>
  );
};

export default Content;
