import React, { useContext, createContext, useState, useEffect, useCallback } from "react";

export const  emptyGrid = {
    r1:["","","","","","","","",""],
    r2:["","","","","","","","",""],
    r3:["","","","","","","","",""],
    r4:["","","","","","","","",""],
    r5:["","","","","","","","",""],
    r6:["","","","","","","","",""],
    r7:["","","","","","","","",""],
    r8:["","","","","","","","",""],
    r9:["","","","","","","","",""],
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
				  setColWarnings}}>
      {children}
    </GridContext.Provider>
  );
};

export const useGridContext = () => {
  const context = useContext(GridContext);
  if(!context) throw new Error("There is no grid");
  return context;
};

