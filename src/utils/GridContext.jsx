import React, { useContext, createContext, useState, useEffect, useCallback } from "react";

export const  emptyGrid = {
  r1:[{value:"", locked: false} ,{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r2:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r3:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r4:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r5:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r6:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r7:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r8:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  r9:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  };

export const GridContext = createContext(null);

export const GridContextProvider = ({ children }) => {

  const [sudokuGrid, setSudokuGrid] = useState(() => {
    let grid = localStorage.getItem("sudokuGrid");
    return (grid ? JSON.parse(grid) : emptyGrid);
    });
  
  const [highlight, setHightlight] = useState(() => {
    let highlighting = localStorage.getItem("highlight");
    return (highlighting != undefined ? highlighting : false);
  });
  
  const [selectValue, setSelectValue] = useState();

  const [rowWarnings, setRowWarnings] = useState(
    {
      r1:[],r2:[],r3:[],
      r4:[],r5:[],r6:[],
      r7:[],r8:[],r9:[]
    });
  
  const [colWarnings, setColWarnings] = useState(
    {
      c1:[],c2:[],c3:[],
      c4:[],c5:[],c6:[],
      c7:[],c8:[],c9:[]
    });
  
  useEffect(() => {
    localStorage.setItem("sudokuGrid", JSON.stringify(sudokuGrid));
  }, [ sudokuGrid ]);

  useEffect(() => {
    localStorage.setItem("highlight", highlight);
  }, [ highlight]);

  const checkPuzzle = () => {
    console.log("CHECKING");
    let solution = localStorage.getItem("solution");
    solution = (solution ? JSON.parse(solution) : emptyGrid);
    for (const row in sudokuGrid) {
      for (const entry in row) {
	if (sudokuGrid[row][entry] == solution[row][entry]) {
	  continue;
	} else {
	  console.log("NO SOLUTON");
	  return "NO SOLUTION";
	}
	
      }
    };
    return "COMPLETE!!"
  };
  
  
  return (
    <GridContext.Provider value={{sudokuGrid,
				  setSudokuGrid,
				  highlight,
				  setHightlight,
				  selectValue,
				  setSelectValue,
				  rowWarnings,
				  setRowWarnings,
				  colWarnings,
				  setColWarnings,
				  checkPuzzle}}>
      {children}
    </GridContext.Provider>
  );
};

export const useGridContext = () => {
  const context = useContext(GridContext);
  if(!context) throw new Error("There is no grid");
  return context;
};

export const getSudokuInfo = async (difficulty) => {

  //  let APIdata = await fetch(`/api/sudoku/${difficulty}`)
  // vercel backend need to update
  let APIdata = await fetch(`https://sudoku-backend.vercel.app/api/sudoku/${difficulty}`)
    .then(response => response.json())
    .then(data => parseAPI(data.info))
      .catch(error => {
	console.log("Error fetching Sudoku puzzle(REACT):", error);
      });
  return APIdata;
};

const parseAPI = (data) => {
  let puzzleGrid = {
    r1:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r2:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r3:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r4:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r5:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r6:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r7:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r8:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r9:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  };
      
  let solutionGrid = {
    r1:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r2:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r3:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r4:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r5:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r6:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r7:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r8:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
    r9:[{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false},{value:"", locked: false}],
  };

  let revGrid = (data.puzzle).split("").reverse();
  let revSol = (data.solution).split("").reverse();

  // make new grid
  while(revGrid.length > 0 ) {
    for (const row in puzzleGrid) {
      for (let i = 0; i < 9; i++) {
	let entry = Number(revGrid.pop());
	puzzleGrid[row][i].value = (entry != 0 ? entry : "");
	puzzleGrid[row][i].locked = (entry != 0 ? true : false);
      }
    }
  }
  
  // make solution grid
  while(revSol.length > 0 ) {
    for (const row in solutionGrid) {
      for (let i = 0; i < 9; i++) {
	let entry = Number(revSol.pop());
	solutionGrid[row][i].value = (entry != 0 ? entry : "");
	solutionGrid[row][i].locked = true;
      }
    }
  }

  return {
    puzzle: puzzleGrid,
    solution: solutionGrid
  }
};
  
  
