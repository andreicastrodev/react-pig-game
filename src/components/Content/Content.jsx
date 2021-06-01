import React, { useReducer, useState } from "react";
import Button from "../Button/Button";
import styles from "./Content.module.css";
import Players from "../Players/Players";
import INITIAL_STATE from "./config";
const Content = () => {
  const gameReducer = (state, action) => {
    switch (action.type) {
      case "ROLL":
        console.log(action.dice);
        return {
          ...state,
          curDice: action.dice,
          currentScore: (state.currentScore += action.dice),
        };

      case "SWITCH":
        return {
          ...state,
          currentScore: 0,
          activePlayer: state.activePlayer === 0 ? 1 : 0,
        };
      case "SHOW":
        return {
          ...state,
          showDice: true,
        };
      case "WINNER":
        return {
          ...state,
          isWinner: true,
          showDice: false,
          isPlaying: false,
        };
      case "NEW":
        return {
          ...INITIAL_STATE,
        };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
  const [scores, setScores] = useState([0, 0]);

  const { showDice, curDice, currentScore, activePlayer, isWinner, isPlaying } =
    state;

  const diceImg = require(`../../assets/images/dice-${curDice}.png`).default;

  const rollDiceHandler = () => {
    console.log(state);

    if (isPlaying) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      dispatch({ type: "SHOW" });
      if (dice !== 1) {
        console.log(state.curDice);
        dispatch({ type: "ROLL", dice: dice });
      } else {
        switchHandler();
      }
    }
  };

  const switchHandler = () => {
    dispatch({ type: "SWITCH" });
  };

  const holdHandler = () => {
    if (isPlaying) {
      scores[activePlayer] += currentScore;
      if (scores[activePlayer] >= 5) {
        dispatch({ type: "WINNER" });
      } else {
        switchHandler();
      }
    }
  };

  const newGameHandler = () => {
    dispatch({ type: "NEW" });
    setScores([0, 0]);
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
