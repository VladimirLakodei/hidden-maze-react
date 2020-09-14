import React from 'react';
import './style.css';

import Cell from '../cell';

const Field = (props) => {
  return (
    <div className="field">
      {props.data.map((row) =>
        row.map((item) =>
          <Cell key={item.id} value={item.marker} />
        )
      )}
    </div>
  )
}

export default Field;
