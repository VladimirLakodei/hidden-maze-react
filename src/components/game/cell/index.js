import React from 'react';
import './style.css';

const Cell = (props) => {
  const {value, onChoseCell, isFinishShowSteps} = props;

  const handlerClick = () => {
    onChoseCell(value);
  }

  return (
    // If in one place - overlap each other
    <button
      className="cell"
      onClick={handlerClick}
      disabled={!isFinishShowSteps}>{value}</button>
  );
}

export default Cell;
