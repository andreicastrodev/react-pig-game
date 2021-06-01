import React from "react";
import styles from "./Button.module.css";
const Button = ({ name, onClickHandler, type }) => {
  let buttonType;

  if (type === "roll") {
    buttonType = `${styles.btnRoll}`;
  } else if (type === "hold") {
    buttonType = `${styles.btnHold}`;
  } else {
    buttonType = `${styles.btnNew}`;
  }

  return (
    <React.Fragment>
      <button
        onClick={onClickHandler}
        className={`${styles.btn} ${buttonType}`}
      >
        {name}
      </button>
    </React.Fragment>
  );
};

export default Button;
