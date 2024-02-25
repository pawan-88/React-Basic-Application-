import { useState } from "react";
import Sports from "./Sports";

const SportGame = ({ games }) => {
  let [activeSports, setActiveSports] = useState([]);

  let onPlayButton = (game, event) => {
    let newSports = [...activeSports, game];
    setActiveSports(newSports);
  };

  return (
    <ul className="list-group ps-game">
      {games.map((game) => (
        <Sports
          key={game}
          sportGame={game}
          bought={activeSports.includes(game)}
          handlePlayButtonClick={(event) => onPlayButton(game, event)}
        ></Sports>
      ))}
    </ul>
  );
};

export default SportGame;
