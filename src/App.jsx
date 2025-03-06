import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from "./components/Grid"; 
import Sidebar from "./components/Sidebar";
import Selection from "./components/Selection";
import { GridContextProvider } from "./utils/GridContext";


function App() {

  
  return (
    <>
      <GridContextProvider>
      <header>
	<p>React to the Sudoku</p>
      </header>
      <Selection />
      <section className="main-page">
	<Grid id="grid" />
	<Sidebar id="sidebar" />
      </section>
      <footer>
	<p> made with vite</p>
      </footer>
      </GridContextProvider>
    </>
  )
}

export default App
