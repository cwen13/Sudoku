import React, { useState, useEffect } from 'react';
import { useGridContext, GridContext } from "./../../utils/GridContext.jsx";

import "./style.css";

const Cell = (props) => {

  const { sudokuGrid,
	  setSudokuGrid,
	  selectValue,
	  setSelectValue
	} = useGridContext(); 
  
  const [isEditing, setIsEditing] = useState(false);

  let col = (props.index % 9) + 1;
  let row = Math.floor(props.index / 9) + 1;

  const handleMouseClick = () => {
    setIsEditing(true);
    setSelectValue(props.cellValue);
  };
  const handleMouseLeave = () => {
    setIsEditing(false);
  };
  
  const handleValueChange = (e) => {
    let newSudokuGrid = Object.assign({}, sudokuGrid);
    newSudokuGrid[`r${row}`][col-1] = Number(e.target.value);
    setSudokuGrid(newSudokuGrid);
    seSelectValue(Number(e.target.value));
  };

  
  return(
    <section className={`cell row-${row} col-${col}`}>
      <section className={`selection ${selectValue == props.cellValue ? "cellHighlight" : ""}`}>
	  {isEditing
	   ? ( <>
		 <input className="cell-value"
		      type="numeric"
		      autoComplete="off"
		      maxLength={1}
		      patter="[0-9]"
		      value={props.cellValue}
		      onChange={handleValueChange}
		      onMouseLeave={handleMouseLeave}
		      
	       />
		 </>)
	   : ( <>
		 <div className="cell-value"
		      onClick={handleMouseClick}
		 >
		 {props.cellValue}
	       </div>
		 </>)
	  }
	</section>
      </section>
  );
};

export default Cell;
