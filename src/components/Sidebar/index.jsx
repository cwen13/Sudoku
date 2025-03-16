import React, { useState, useEffect } from 'react';
import { useGridContext, GridContext, emptyGrid } from "./../../utils/GridContext.jsx";
import Selection from "./../Selection";

import "./style.css";

const Sidebar = (props) => {

  const { setSudokuGrid,
	  highlight,
	  setHightlight,
	  checkPuzzle } = useGridContext(); 

  const solve = () => {
    setSudokuGrid(JSON.parse(localStorage.getItem("solution")));
  }
  
  return(
    <section className="sidebar">
      <Selection />
      <section id="gameplay">
	<button id="reset"
		type="button"
		onClick={() => setSudokuGrid(emptyGrid)}
	>
	  reset
	</button>
	<button id="undo"
		type="button"
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
