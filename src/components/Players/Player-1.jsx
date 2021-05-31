import React from "react";
import styles from "./Player.module.css";

const Player1 = ({ score, totalScore, active, winner }) => {
  const playerActive = active ? styles.playerActive : null;
  const playerWinner = winner ? styles.playerWinner : null;

  return (
    <div className={`${styles.player} ${playerActive} ${playerWinner}`}>
      <h2 className={`${styles.name} `}>{winner ? `Winner` : `Player 1`}</h2>
      <p className={`${styles.score} `}> {score} </p>
      <div className={`${styles.current}`}>
        <p className={styles.currentLabel}>Current</p>
        <p className={styles.currentScore}>{totalScore}</p>
      </div>
    </div>
  );
};

export default Player1;
