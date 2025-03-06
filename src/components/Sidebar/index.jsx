import React, { useState, useEffect } from 'react';
import "./style.css";
import Numpad from "./Numpad.jsx";

const Sidebar = (props) => {

  return(
    <section className="sidebar">
      Here is the side bar
      <Numpad />
      <section id="gameplay">
	<button id="reset"
		type="button"
	>
	  reset
	</button>
	<button id="undo"
		type="button"
	>
	  undo
	</button>
	<button id="clear"
		type="button"
	>
	  clear cell
	</button>
	<button id="highlight"
		type="button"
	>
	  toggle highlighting
	</button>	
	    
      </section>
    </section>
  );
};

export default Sidebar;
