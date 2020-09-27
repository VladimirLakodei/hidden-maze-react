import React from 'react';
import './style.css';

const Cell = (props) => {
  const {value, onChoseCell} = props;

  const handlerClick = () => {
    onChoseCell(value);
  }

  return (
    // If in one place - overlap each other
    <button className="cell" onClick={handlerClick}>{value}</button>
  );
}

export default Cell;
