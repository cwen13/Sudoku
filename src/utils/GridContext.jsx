import React, { useContext, createContext, useState, useEffect, useCallback } from "react";

export const  emptyGrid = {
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

export const GridContext = createContext(null);

export const GridContextProvider = ({ children }) => {

  const [sudokuGrid, setSudokuGrid] = useState(() => {
    let grid = localStorage.getItem("sudokuGrid");
    return (grid ? JSON.parse(grid) : emptyGrid);
    });

  useEffect(() => {
    localStorage.setItem("sudokuGrid", JSON.stringify(sudokuGrid));

  }, [ sudokuGrid ]);
  
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

