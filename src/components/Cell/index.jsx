import React, { useState, useEffect } from 'react';
import { useGridContext, GridContext } from "./../../utils/GridContext.jsx";

import "./style.css";

const Cell = (props) => {

  const { sudokuGrid, setSudokuGrid } = useGridContext(); 
  
  const [cellValue, setCellValue] = useState(props.cellValue);
  const [isEditing, setIsEditing] = useState(false);

  let col = (props.index % 9) + 1;
  let row = Math.floor(props.index / 9) + 1;
  
  /*
  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleStopEditing = () => {
    setIsEditing(false);
    };
  */
  const handleCellClick = () => {
    setIsEditing(true);
  }
  const handleMouseLeave = () => {
    setIsEditing(false);
  }
  
  const handleValueChange = (e) => {
    //from AI not sure but causes short circuit
    //if (!e || !e.type) return; // Check if e is null or undefined
    //const context = useContext(GridContext);
    setCellValue(e.target.value);

  };

  useEffect(() => {
    let newSudokuGrid = sudokuGrid;
    newSudokuGrid[`r${row}`][col-1] = Number(cellValue);
    setSudokuGrid(newSudokuGrid);    
  },[cellValue]);
  
  return(
    <section className={`cell row-${row} col-${col}`}>
	<section className="selection">
	  {isEditing
	   ? ( <>
		 <input className="cell-value"
		      type="numeric"
		      autoComplete="off"
		      maxLength={1}
		      patter="[0-9]"
		      value={cellValue}
		      onChange={handleValueChange}
		      onMouseLeave={handleMouseLeave}
		      
	       />
		 </>)
	   : ( <>
		 <div className="cell-value"
		      onClick={handleCellClick}
		 >
		 {cellValue}
	       </div>
		 </>)
	  }
	</section>
      </section>
  );
};

export default Cell;
