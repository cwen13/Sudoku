import { React, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from "./components/Grid"; 
import Sidebar from "./components/Sidebar";
import { GridContextProvider } from "./utils/GridContext";

function App() {

  const mQuery = "(max-width: 400px)";
  
  const [mobile, setMobile] = useState(window.matchMedia(mQuery).matches);

  window.addEventListener('resize', () => {
    // Update the width state variable when the window is resized
    console.log("resize update:", window.matchMedia(mQuery).matches);
    setMobile(window.matchMedia(mQuery).matches);
  });

  
  console.log(window.matchMedia(mQuery).matches);

  return (
    <>
      <GridContextProvider>
      <header>
	<p>REACTJS:  Sudoku</p>
      </header>
	
	<section className={`main-page ${mobile && "mobile"}`}>
	  <Grid id="grid" />
	  <Sidebar id="sidebar" />
	</section>
	
	<footer>
	  <div>
	    <p>Made with React and Vite by Cody Wenrich-Clegg</p>
	    <p>	    
	      Source code <a href="https://github.com/cwen13/Sudoku"
			     target="_blank"
			  >here</a>
	    </p>
	  </div>
	</footer>
      </GridContextProvider>
    </>
  )
}

export default App
