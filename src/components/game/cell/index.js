import React from 'react';
import './style.css';

const Cell = (props) => {
  return (
    // If in one place - overlap each other
    <button className="cell">{props.value}</button>
  );
}

export default Cell;
