import React from 'react';
import './style.css';

import Cell from '../cell';

const Field = (props) => {
  const {
    data,
    onChoseCell,
    isFinishShowSteps,
    isGameFinished} = props;

  return (
    <div className="field">
      {data.map((row) =>
        row.map((item) =>
          <Cell
            key={item.id}
            value={item.marker}
            onChoseCell={(value) => {onChoseCell(value)}}
            isFinishShowSteps={isFinishShowSteps}
            isGameFinished={isGameFinished}
          />
        )
      )}
    </div>
  )
}

export default Field;
