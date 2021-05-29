import React, { useState } from "react";
import Player1 from "../Players/Player-1";
import Player2 from "../Players/Player-2";
import styles from "./Content.module.css";
import dice1 from "../../assets/images/dice-1.png";
import dice2 from "../../assets/images/dice-2.png";
import dice3 from "../../assets/images/dice-3.png";
import dice4 from "../../assets/images/dice-4.png";
import dice5 from "../../assets/images/dice-5.png";
import dice6 from "../../assets/images/dice-6.png";
const Content = () => {
  const [curDice, setCurDice] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  const rollDiceHandler = () => {
    const dice = Math.trunc(Math.random() * 5) + 1;
    setCurDice(dice);
    setPlayer1Score((prevState) => dice + 1 + prevState);
  };

  return (
    <div className={styles.content}>
      <Player1 score={player1Score} />
      <Player2 />
      <img src={dices[curDice]} alt="Playing dice" className={styles.dice} />
      <button className={`${styles.btn} ${styles.btnNew}`}>New game</button>
      <button
        className={`${styles.btn} ${styles.btnRoll}`}
        onClick={rollDiceHandler}
      >
        Roll dice
      </button>
      <button className={`${styles.btn} ${styles.btnHold}`}>Hold</button>
    </div>
  );
};

export default Content;
