import React, { useState, useEffect } from 'react';
import { getSudokuInfo, useGridContext } from "./../../utils/GridContext";

import "./style.css";

const Selection = (props) => {

  const { setSudokuGrid } = useGridContext();
  
  const handleButtonClick = async (e) => {
    console.log(e.target.id);
    let newGrid = await getSudokuInfo(e.target.id);
    setSudokuGrid(newGrid.puzzle);
    localStorage.setItem("solution", JSON.stringify(newGrid.solution));
  };
  
  
  return(
    <section id="difficulty">
      <button id="easy"
	      className="level"
	      onClick={handleButtonClick}
      >EASY</button>
      <button id="medium"
	      className="level"
	      onClick={handleButtonClick}
      >MEDIUM</button>
      <button id="hard"
	      className="level"
	      onClick={handleButtonClick}
      >HARD</button>
    </section>
  );
};

export default Selection;
