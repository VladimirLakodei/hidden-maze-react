import React, { useState, useEffect  } from 'react';
import './style.css';

import Cell from '../cell';

const Field = (props) => {
  const [field, updateField] = useState([]);

  const createField = (size) => {
    const field = new Array(size);

    let count = 0;

    for (let i = 0; i < field.length; i++) {
      const row = new Array(size);

      for (let i = 0; i < field.length; i++) {
        row[i] = {
          id: count++,
        };
      }

      field[i] = row;
    }

    updateField( field );
  }

  useEffect(() => {
    createField(props.size);
    return () => {
      console.log('unmount');
    }
  }, [props.size]);

  return <Content field={ field } />
}

const Content = ({ field }) =>
    <div className="field">

      {field.map((row) =>
        row.map((item) =>
          <Cell key={item.id} />
        )
      )}
    
    </div>
  
export default Field;
