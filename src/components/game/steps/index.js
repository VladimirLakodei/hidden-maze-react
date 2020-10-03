import React, { useState, useEffect, useCallback, useRef } from 'react';
import './style.css';

import Step from '../step';

const Steps = (props) => {
  const {data, onFinishShowSteps} = props;

  const [steps, setSteps] = useState(() => [...data]);
  const [directions, setDirections] = useState([]);
  const [stepNumber, setStepNumber] = useState(0);
  const intervalDuration = 100;
  const timeout = useRef(null);

  const isDirection = data[0]?.direction;

  const showStep = useCallback(() => {
    setSteps((previous) => {
      previous[stepNumber].isVisible = 'vis';

      return previous;
    });

    setStepNumber((previous) => {
      return previous + 1;
    });
  }, [stepNumber]);

  useEffect(() => {
    if (isDirection) {
      const directions = data.map(item => item.direction&& item.direction);

      setDirections(directions);
    } else {
      setDirections([]);
      setSteps([...data]);
      setStepNumber(0);
    }

  }, [data, isDirection]);

  const runTimeout = useCallback(() => {
    clearTimeout(timeout);

    timeout.current = setTimeout(() => {
      showStep();
    }, intervalDuration);
  }, [showStep]);

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
  }, [directions.length, stepNumber, timeout, data, runTimeout, onFinishShowSteps]);

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
