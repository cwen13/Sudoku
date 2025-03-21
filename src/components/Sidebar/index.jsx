import React, { useState, useEffect } from 'react';
import { useGridContext, GridContext, emptyGrid } from "./../../utils/GridContext.jsx";
import Selection from "./../Selection";

import "./style.css";

const Sidebar = (props) => {

  const {
    setSudokuGrid,
    highlight,
    setHightlight,
    checkPuzzle,
    solved,
    setSolved,
    undoGrid,
    setUndoGrid
  } = useGridContext(); 

  const solve = () => {
    setSudokuGrid(JSON.parse(localStorage.getItem("solution")));
  }

  const undo = () => {
    if(undoGrid.length > 1) {
      console.log("UNDOGRID:", undoGrid[undoGrid.length-2]);
      setSudokuGrid(undoGrid[undoGrid.length-2]);
      console.log("NEW UNDOGRID:", undoGrid.splice(undoGrid.length-2));
      setUndoGrid(undoGrid.splice(undoGrid.length-2));
    };
  };
  
  return(
    <section className="sidebar">
      {solved ? <p>SOLVED</p> : <p>No qutie solved</p>}
      <Selection />
      <section id="gameplay">
	<button id="reset"
		type="button"
		onClick={() =>{
		  setSolved(false);
		  setUndoGrid([]);
		  setSudokuGrid(emptyGrid);
		}}
	>
	  reset
	</button>
	<button id="undo"
		type="button"
		onClick={() => undo()}
	>
	  undo
	</button>
	<button id="highlight"
		type="button"
		onClick={() => setHightlight(!highlight)}
	>
	  highlighting
	</button>
	<button id="check"
		type="button"
		onClick={() => checkPuzzle()}
	>
	  check
	  </button>
	<button id="solve"
		type="button"
		onClick={() => solve()}
	>
	  solve
	  </button>
	    
      </section>
    </section>
  );
};

export default Sidebar;
