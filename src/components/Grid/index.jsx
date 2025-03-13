import React, { useState, useEffect } from 'react';
import Cell from "./../Cell";
import { useGridContext } from "./../../utils/GridContext.jsx";

import "./style.css";

const Grid = (props) => {

  const { sudokuGrid,
	  highlight,
	  emptyGrid,
	  rowWarnings,
	  setRowWarnings,
	  colWarnings,
	  setColWarnings
	} = useGridContext(); 
  
  let entry = 0;
  
  useEffect(() => {
    let newWarnings = {
      r1:[],r2:[],r3:[],
      r4:[],r5:[],r6:[],
      r7:[],r8:[],r9:[]
    };
    let keys = Object.keys(sudokuGrid);
    keys.map((key) => {
      newWarnings[key].push(...checkRow(sudokuGrid[key]));
    });
    setRowWarnings(newWarnings);
  }, [sudokuGrid]);

  useEffect(() => {
    let newWarnings = checkCols(sudokuGrid);
    setColWarnings(newWarnings);
  }, [sudokuGrid]);
  
  const checkRow = (row) => {
    let warnings = []
    let values = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}
    row.forEach((ele) => values[ele]++);
    for (const value in values) {
      if(values[value] > 1) warnings.push(Number(value));
    }
    return warnings;
  };

  const checkCol = (grid, column) => {
    let values = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}
    let col = [];
    for (const row in grid) {
      col.push(grid[row][column]);
    }
    return checkRow(col);
  };

  const checkCols = (grid) => {
    let warnigns = [];
    let cols = {
      c1:[],c2:[],c3:[],
      c4:[],c5:[],c6:[],
      c7:[],c8:[],c9:[]
    }
    for (const col in cols) {
      cols[col] = checkCol(grid, col.slice(-1)-1);
    }
    return cols;
  };
      
  
  return(
    <section className={`grid ${highlight ? "highlight" : "" }`}>
      {Object.entries(sudokuGrid).map(([row, values]) => {
	return(
	  <section key={entry+81}
		   className={`row row-${row.slice(-1)}`}>
	    {values.map((cellValue) => <Cell key={entry}
					     index={entry++}
					     cellValue={cellValue}
					     warningRow={rowWarnings[row]}
				       />)}
	  </section>
	)
      })} 
		 
    </section>

  );
};

export default Grid;
