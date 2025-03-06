import React, { useState, useEffect } from 'react';
import "./style.css";

const Selection = (props) => {

  return(
    <section id="difficulty">
      <div className="level">easy</div>
      <div className="level"> medium</div>
      <div className="level">hard</div>
    </section>
  );
};

export default Selection;
