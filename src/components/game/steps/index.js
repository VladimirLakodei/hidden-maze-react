import React, { useState, useEffect } from 'react';
import './style.css';

import Step from '../step';

const Steps = (props) => {
  const {data, onFinishShowSteps} = props;

  const [steps, setSteps] = useState(() => [...data]);
  const [directions, setDirections] = useState([]);
  const [stepNumber, setStepNumber] = useState(0);
  const intervalDuration = 100;
  let timeout = null;

  const isDirection = data[0]?.direction;

  useEffect(() => {
    if (data[0].direction) {
      const directions = data.map(item => item.direction&& item.direction);

      setDirections(directions);
    }

  }, [data, isDirection]);

  const runTimeout = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      showStep();
    }, intervalDuration);
  };

  useEffect(() => {
    if (directions.length > 0 &&
        stepNumber < data.length &&
        data[stepNumber].direction) {
      runTimeout();
    } else if (stepNumber === data.length) {
      onFinishShowSteps();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [directions.length, stepNumber, timeout]);

  const showStep = () => {
    setSteps((previous) => {
      previous[stepNumber].isVisible = 'vis';

      return previous;
    });

    setStepNumber((previous) => {
      return previous + 1;
    });
  };

  const content = steps.map((item) => {
    return <Step
      key={item.id}
      isVisible={item.isVisible}
      stepDirection={item.direction} />;
  });

  return (
    <div className="steps">
      { content }
    </div>
  );
}

export default Steps;
