import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from "./components/Grid"; 
import Sidebar from "./components/Sidebar";
import { GridContextProvider } from "./utils/GridContext";


function App() {

  
  return (
    <>
      <GridContextProvider>
      <header>
	<p>React to the Sudoku</p>
      </header>
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
