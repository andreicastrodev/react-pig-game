import React from "react";
import styles from "./Player.module.css";

const Player2 = ({ score }) => {
  return (
    <div className={styles.player}>
      <h2 className={styles.name}>Player 2</h2>
      <p className={styles.score}> {score} </p>
      <div className={styles.current}>
        <p className={styles.currentLabel}>Current</p>
        <p className={styles.currentScore}>0 </p>
      </div>
    </div>
  );
};

export default Player2;
