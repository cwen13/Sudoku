import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from "./components/Grid"; 
import Sidebar from "./components/Sidebar";
import { GridContextProvider } from "./utils/GridContext";

function App() {

  const [mobile, setMobile] = useState(
    window.matchMedia("(min-widdth: 350px)").matches
  }

  useEffect(() => {
    window
      .matchMedia("(min-widdth: 350px)")
      .addEventListener('change', e => setMatches(e.matches));
  },[]);
 
  return (
    <>
      <GridContextProvider>
      <header>
	<p>REACTJS:  Sudoku</p>
      </header>
	
	<section className="main-page">
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
