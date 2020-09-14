import React from 'react';
import './style.css';

const Cell = (props) => {
  return (
    <button className="cell">{props.value}</button>
  );
}

export default Cell;