import React from 'react';
import './style.css';

import Step from '../step';

const Steps = (props) => {
  const createSteps = (number) => {
    let count = 0;
    const steps = new Array(number);

    for (let i = 0; i < steps.length; i++) {
      steps[i] = {
        id: count++,
      };
    }

    return steps;
  }

  const steps = createSteps(props.number);
    
  const content = steps.map((item) => {
    return <Step key={item.id} />;
  });

  return (
    <div className="steps">
      { content }
    </div>
  );
}

export default Steps;
