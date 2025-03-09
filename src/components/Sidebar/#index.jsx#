import React, { useState, useEffect } from 'react';
import { useGridContext, GridContext, emptyGrid } from "./../../utils/GridContext.jsx";
import Selection from "./../Selection";

import "./style.css";

const Sidebar = (props) => {

  const { setSudokuGrid,
	  highlight,
	  setHightlight } = useGridContext(); 
  
  return(
    <section className="sidebar">
      Here is the side bar
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
	    
      </section>
    </section>
  );
};

export default Sidebar;
