import React from "react";
import Player1 from "../Players/Player-1";
import Player2 from "../Players/Player-2";
import styles from "./Content.module.css";
import dice from "../../assets/images/dice-1.png";

const Content = () => {
  return (
    <div className={styles.content}>
      <Player1 />
      <Player2 />
      <img src={dice} alt="Playing dice" class={styles.dice} />
      <button class={`${styles.btn} ${styles.btnNew}`}>New game</button>
      <button class={`${styles.btn} ${styles.btnRoll}`}>Roll dice</button>
      <button class={`${styles.btn} ${styles.btnHold}`}>Hold</button>
    </div>
  );
};

export default Content;
