import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SportGame from "./components/SportGame";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import SportsInput from "./components/SportsInput";

function App() {
  let [textToShow, setTextState] = useState();
  let [sportGame, setSportGame] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newSportGame = event.target.value;
      event.target.value = "";
      let newSport = [...sportGame, newSportGame]; // {... } -> Spread Operater in React js
      setSportGame(newSport);
    }
  };
  return (
    <>
      <Container>
        <h1 className="sport-heading">Sports Game </h1>
        <SportsInput handleKeyDown={onKeyDown}></SportsInput>
        <ErrorMessage games={sportGame}></ErrorMessage>
        <SportGame games={sportGame}></SportGame>
      </Container>
    </>
  );
}
export default App;

//Using Logical operater
//let logicalOp = games.length === 0 && <h3>I want to play something...</h3>

// This is ternary operater using in react js
// let emptyMessage = sportsGame.length === 0 ? <h3>I want to play something.</h3> : null;

// This useing if else statement for Rendering data
// if (sportsGame.length === 0) {
//   return <h3>I want to play something..</h3>;
// }

// <>...</> -> React Fragment use in this application OR <React.Fragment>...</React.Fragment>
