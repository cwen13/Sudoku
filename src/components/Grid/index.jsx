import React, { useState, useEffect } from 'react';
import Cell from "./../Cell";
import { useGridContext } from "./../../utils/GridContext.jsx";

import "./style.css";


const Grid = (props) => {

  const { sudokuGrid,
	  highlight,
	  emptyGrid,
	} = useGridContext(); 
  
  let entry = 0;

  

  return(
    <section className={`grid ${highlight ? "highlight" : "" }`}>
      {Object.entries(sudokuGrid).map(([row, values]) => {
	return(
	  <section key={entry+81}
		   className={`row row-${row.slice(-1)}`}>
	    {values.map((cellValue) => <Cell key={entry}
					     index={entry++}
					     cellValue={cellValue}
				       />)}
	  </section>
	)
      })} 
		 
    </section>

  );
};

export default Grid;
