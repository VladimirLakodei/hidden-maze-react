import React from 'react';
import './style.css';

import Field from '../field';
import Steps from '../steps';

import config from '../config';

const Body = () => {
  const state = {
    fieldSize: config.fieldSize,
    stepsNumber: config.stepsNumber,
  };

  const { fieldSize, stepsNumber } = state;

  return (
    <div className="game-body">
      <Field size={fieldSize} />
      <Steps number={stepsNumber} />
    </div>
  )
}

export default Body;
