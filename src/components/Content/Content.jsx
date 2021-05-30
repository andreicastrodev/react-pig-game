import React, { useState } from "react";
import Player1 from "../Players/Player-1";
import Player2 from "../Players/Player-2";

import styles from "./Content.module.css";

const Content = () => {
  const [showDice, setShowDice] = useState(false);
  const [curDice, setCurDice] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);

  const diceImg = require(`../../assets/images/dice-${curDice}.png`).default;

  const rollDiceHandler = () => {
    const dice = Math.trunc(Math.random() * 6) + 1;
    setShowDice(true);
    if (dice !== 1) {
      console.log(dice);
      setCurDice(dice);
      setCurrentScore((prevState) => (prevState += dice));
    } else {
      switchHandler();
    }
  };

  const switchHandler = () => {
    setCurrentScore(0);
    setActivePlayer((prevState) => (prevState === 0 ? 1 : 0));
  };

  return (
    <div className={styles.content}>
      {activePlayer === 0 ? (
        <Player1 score={currentScore} />
      ) : (
        <Player1 score={0} />
      )}
      {activePlayer === 1 ? (
        <Player2 score={currentScore} />
      ) : (
        <Player2 score={0} />
      )}

      <img
        src={diceImg}
        alt="Playing dice"
        className={styles.dice}
        style={{ visibility: showDice ? "visible" : "hidden" }}
      />
      <button className={`${styles.btn} ${styles.btnNew}`}>New game</button>
      <button
        className={`${styles.btn} ${styles.btnRoll}`}
        onClick={rollDiceHandler}
      >
        Roll dice
      </button>
      <button
        className={`${styles.btn} ${styles.btnHold}`}
        onClick={switchHandler}
      >
        Hold
      </button>
    </div>
  );
};

export default Content;
