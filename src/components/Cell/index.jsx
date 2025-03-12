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

  const handleValueChange = (e) => {
    let newSudokuGrid = Object.assign({}, sudokuGrid);
    if(e.code == "Backspace") {
      newSudokuGrid[`r${row}`][col-1] = Number("");
      setSudokuGrid(newSudokuGrid);
    }
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

  const blockNumber = (index) => {
    let block1 = [ 0, 1, 2, 9,10,11,18,19,20];
    let block2 = [ 3, 4, 5,12,13,14,21,22,23];
    let block3 = [ 6, 7, 8,15,16,17,24,25,26];
    let block4 = [27,28,29,36,37,38,45,46,47];
    let block5 = [30,31,32,39,40,41,48,49,50];
    let block6 = [33,34,35,42,43,44,51,52,53];
    let block7 = [54,55,56,63,64,65,72,73,74];
    let block8 = [57,58,59,66,67,68,75,76,77];
    let block9 = [60,61,62,69,70,71,78,79,80];

    if(block1.some(ele => ele === index)) {
      return "block-1";
    } else if(block2.some(ele => ele === index)) {
      return "block-2";
    } else if(block3.some(ele => ele === index)) {
      return "block-3";
    } else if(block4.some(ele => ele === index)) {
      return "block-4";
    } else if(block5.some(ele => ele === index)) {
      return "block-5";
    } else if(block6.some(ele => ele === index)) {
      return "block-6";
    } else if(block7.some(ele => ele === index)) {
      return "block-7";
    } else if(block8.some(ele => ele === index)) {
      return "block-8";
    } else if(block9.some(ele => ele === index)) {
      return "block-9";
    }
  }
  
  return(
    <section className={`cell  ${blockNumber(props.index)}`}>
      <section className={`row-${row} col-${col} selection ${selectValue == props.cellValue ? "cellHighlight" : ""}`}>
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
