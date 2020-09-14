import React from 'react';
import './style.css';

import Step from '../step';

const Steps = (props) => {
  const content = props.data.map((item) => {
    return <Step key={item.id} stepDirection={item.direction} />;
  });

  return (
    <div className="steps">
      { content }
    </div>
  );
}

export default Steps;
