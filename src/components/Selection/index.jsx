import React, { useState, useEffect } from 'react';
import "./style.css";

const Selection = (props) => {


  
  return(
    <section id="difficulty">
      <div id="easy"
	   className="level">EASY</div>
      <div id="medium"
	   className="level">MEDIUM</div>
      <div id="hard"
	   className="level">HARD</div>
    </section>
  );
};

export default Selection;
