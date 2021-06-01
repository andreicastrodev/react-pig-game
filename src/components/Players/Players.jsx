import React from "react";
import Player1 from "./Player-1";
import Player2 from "./Player-2";
const Players = ({ activePlayer, currentScore, scores, winner }) => {
  return (
    <React.Fragment>
      {activePlayer === 0 ? (
        <Player1
          active={true}
          score={currentScore}
          totalScore={scores[0]}
          winner={winner}
        />
      ) : (
        <Player1 score={0} totalScore={scores[0]} />
      )}
      {activePlayer === 1 ? (
        <Player2
          active={true}
          score={currentScore}
          totalScore={scores[1]}
          winner={winner}
        />
      ) : (
        <Player2 score={0} totalScore={scores[1]} />
      )}
    </React.Fragment>
  );
};

export default Players;
