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

  const cellValueRef = React.createRef();

  let col = (props.index % 9) + 1;
  let row = Math.floor(props.index / 9) + 1;

  const handleMouseClick = () => {
    setIsEditing(true);
    (props.cellValue != ""
     ? setSelectValue(props.cellValue)
     : setSelectValue());
  };
  
  const handleMouseLeave = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    let newSudokuGrid = Object.assign({}, sudokuGrid);
    if(e.code == "Backspace") {
      newSudokuGrid[`r${row}`][col-1] = Number("");
      setSudokuGrid(newSudokuGrid);
    }
  };
  
  const handleValueChange = (e) => {
    let newSudokuGrid = Object.assign({}, sudokuGrid);

    console.log("change:", e);
    
    if(Number(e.target.value) > 0 && Number(e.target.value) < 10) {
      newSudokuGrid[`r${row}`][col-1] = Number(e.target.value);
      setSudokuGrid(newSudokuGrid);
      (e.target.value != 0
       ? setSelectValue(Number(e.target.value))
       : setSelectValue(setSelectValue))
    } else {
      newSudokuGrid[`r${row}`][col-1] = "";
      setSudokuGrid(newSudokuGrid);
    }
      
  };


  useEffect(() => {
    if(isEditing) {
      if(cellValueRef.current) {
	cellValueRef.current.select()
      }
    }
  }, [isEditing]);

  
  return(
    <section className={`cell row-${row} col-${col}`}>
      <section className={`selection ${selectValue == props.cellValue ? "cellHighlight" : ""}`}>
	  {isEditing
	   ? ( <>
		 <input className="cell-value"
			type="numeric"
			autoComplete="off"
			maxLength={1}
			patter="[1-9]"
			value={props.cellValue}
			onChange={handleValueChange}
			onMouseLeave={handleMouseLeave}
			onKeyDown={handleKeyDown}
			ref={cellValueRef}
		      
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
