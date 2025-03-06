import React, { useContext, createContext, useState, useEffect, useCallback } from "react";



export const GridContext = createContext(null);

export const GridContextProvider = ({ children }) => {

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

  const [sudokuGrid, setSudokuGrid] = useState(() => {
    let grid = localStorage.getItem("sudokuGrid");
    return (grid ? JSON.parse(grid) : emptyGrid);
  });

  useEffect(() => {
    // update grid with current state from local storage
    setSudokuGrid(JSON.parse(localStorage.getItem("sudokuGrid")));
  }, []);

  useEffect(() => {
    console.log("TRIGGERED:", sudokuGrid);
    localStorage.setItem("sudokuGrid", JSON.stringify(sudokuGrid));
    console.log("AFTTER SETTING:", sudokuGrid);
  }, [sudokuGrid, setSudokuGrid]);
  
  return (
    <GridContext.Provider value={{sudokuGrid,
				 setSudokuGrid}}>
      {children}
    </GridContext.Provider>
  );
};

export const useGridContext = () => {
  const context = useContext(GridContext);
  if(!context) throw new Error("There is no grid");
  return context;
};

