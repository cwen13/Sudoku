import React, { useState, useEffect } from 'react';
import Cell from "./../Cell";
import { useGridContext } from "./../../utils/GridContext.jsx";

import "./style.css";

  let emptyGrid = {
    r1:[0,0,0,0,0,0,0,0,0],
    r2:[0,0,0,0,0,0,0,0,0],
    r3:[0,0,0,0,0,0,0,0,0],
    r4:[0,0,0,0,0,0,0,0,0],
    r5:[0,0,0,0,0,0,0,0,0],
    r6:[0,0,0,0,0,0,0,0,0],
    r7:[0,0,0,0,0,0,0,0,0],
    r8:[0,0,0,0,0,0,0,0,0],
    r9:[0,0,0,0,0,0,0,0,0],
  };


const Grid = (props) => {

  const { sudokuGrid } = useGridContext(); 

//  const [sudokuGrid, setSudokuGrid] = useState(SudokuGrid);

/*  useEffect(() => {
    let localGrid = JSON.decode(localStoage.getItem("localGrid"));
    setGrid(localGrid);
  }, []);

  useEffect(() => {
    localStorage.setItem("localGrid", JSON.stringify(sudokuGrid));
  }, [sudokuGrid]);
*/
  
  let entry = 0;
  
  return(
    <section className="grid">
      {Object.entries(sudokuGrid).map(([row, values]) => {
	return(
	  <section key={entry+81}
		   className={`row ${row}`}>
	    {values.map((cellValue) => <Cell key={entry}
					     index={entry++}
					     cellValue={cellValue} />)}
	  </section>
	)
      })} 
		 
    </section>

  );
};

export default Grid;

/*
  	  row.map((cell) => {
	    <Cell cellValue={cell} />
	  })
*/
