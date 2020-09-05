import React, { Component } from 'react';
import './style.css';

import Field from '../field';
import Steps from '../steps';

import config from '../config';

class Body extends Component {
  state = {
    fieldSize: config.fieldSize,
    stepsNumber: config.stepsNumber,
  };

  render() {
    const { fieldSize, stepsNumber } = this.state;

    return (
      <div className="game-body">
        <Field size={fieldSize} />
        <Steps number={stepsNumber} />
      </div>
    );
  }
}

export default Body;
