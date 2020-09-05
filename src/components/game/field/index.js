import React, { Component } from 'react';
import './style.css';

import Cell from '../cell';

class Field extends Component {
  state = {
    field: [],
  };

  createField(size) {
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

    this.setState({ field });
  }

  update() {
    
  }

  componentDidMount() {
    this.createField(this.props.size);
  }

  componentDidUpdate(prevProps) {
    
  }
  
  render() {
    const { field } = this.state;

    const content = field.map((row) => {
      return row.map((item) => {
        return (<Cell key={item.id} />)
      });
    });

    return (
      <div className="field">
        {content}
      </div>
    );
  }
}

export default Field;
