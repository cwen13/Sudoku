import React, { useState, useEffect } from 'react';
import { useGridContext, GridContext, emptyGrid } from "./../../utils/GridContext.jsx";
import Numpad from "./Numpad.jsx";

import "./style.css";

const Sidebar = (props) => {

    const { sudokuGrid, setSudokuGrid } = useGridContext(); 
  
  const resetGrid = () => {
    setSudokuGrid(emptyGrid);
  }

  
  return(
    <section className="sidebar">
      Here is the side bar
      <Numpad />
      <section id="gameplay">
	<button id="reset"
		type="button"
		onClick={resetGrid}
	>
	  reset
	</button>
	<button id="undo"
		type="button"
	>
	  undo
	</button>
	<button id="clear"
		type="button"
	>
	  clear cell
	</button>
	<button id="highlight"
		type="button"
	>
	  toggle highlighting
	</button>	
	    
      </section>
    </section>
  );
};

export default Sidebar;
