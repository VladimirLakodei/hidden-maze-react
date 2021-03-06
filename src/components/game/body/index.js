import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

import Field from '../field';
import Steps from '../steps';

import config from '../config';

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

  return field;
}

const Body = () => {
  const { fieldSize, stepsNumber } = config;
  const [field, setField] = useState(() => createField(fieldSize));
  const [steps, setSteps] = useState(() => createSteps(stepsNumber));
  const [positionStart, setPositionStart] = useState({x: 0, y: 0});
  const [positionFinish, setPositionFinish] = useState({x: 0, y: 0});
  const [isFinishShowSteps, setIsFinishShowSteps] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [textButtonStart, setTextButtonStart] = useState('Start');

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomDirection = useCallback(() =>  {
    return getRandomInt(1, 4)
  }, []);

  const findStartPosition = useCallback((fieldSize) => {
    const x = getRandomInt(0, fieldSize - 1);
    const y = getRandomInt(0, fieldSize - 1);

    return {
      x,
      y,
    }
  }, []);

  const paveWay = useCallback((positionStart) => {
    const position = {};

    position.x = positionStart.x;
    position.y = positionStart.y;

    for (let index = 0; index < stepsNumber; index++) {
      let continuePave = true;

      do {
        const intendedStep = getRandomDirection(); // maybe better delete wrong step

        switch(intendedStep) {
          case 1:
            if (position.y > 0) {
              position.y -= 1;

              doStep(intendedStep);

              continuePave = false;
            }
            break;
          case 2:
            if (position.x < fieldSize - 1) {
              position.x += 1;

              doStep(intendedStep);

              continuePave = false;
            }
            break;
          case 3:
            if (position.y < fieldSize - 1) {
              position.y += 1;

              doStep(intendedStep);

              continuePave = false;
            }

            break;
          case 4:
            if (position.x > 0) {
              position.x -= 1;

              doStep(intendedStep);

              continuePave = false;
            }

            break;
          default:
            console.error('only accepts an integer from 1 to 4');
        }
      } while (continuePave);
    }

    return position;
  }, [fieldSize, getRandomDirection, stepsNumber]);

  const startGame = useCallback(() => {
    const positionStart = findStartPosition(fieldSize);

    setPositionStart(positionStart);

    const positionFinish = paveWay(positionStart);

    setPositionFinish(positionFinish);

    setField((prev)=>{
      const field = [...prev];

      field[positionStart.y][positionStart.x].marker = 'start';
      field[positionFinish.y][positionFinish.x].marker = 'finish';

      return field;
    });
  }, [fieldSize, findStartPosition, paveWay]);

  useEffect(() => {
    if (isGameStarted) {
      startGame();
    }
  }, [isGameStarted, startGame]);

  const clearGameData = () => {
    setIsGameFinished(false);
    setIsFinishShowSteps(false);
    setIsGameStarted(false);

    setField(createField(fieldSize));
    setSteps(createSteps(stepsNumber));
  }

  function doStep(stepDirection) {
    setSteps(steps => {
      for (let index = 0; index < steps.length; index++) {
        if (steps[index].direction === undefined) {
          steps[index].direction = stepDirection;
          break;
        }
      }

      return steps;
    });
  }

  const onChoseCell = (value) => {
    if (isFinishShowSteps && !isGameFinished) {
      if (value === 'finish') {
        alert('You win!');
      } else {
        alert('You lose!');
      }

      setIsGameFinished(true);
      setIsGameStarted(false);

      setTextButtonStart('Restart');
    }
  }

  const onFinishShowSteps = () => {
    setIsFinishShowSteps(true);
  }

  const startGameHandler = () => {
    if (isGameFinished) {
      clearGameData();
    }

    setIsGameStarted(true);
  }

  return (
    <div className="game-body">
      <button onClick={startGameHandler} disabled={isGameStarted}>{textButtonStart}</button>
      <Field
        data={field}
        positionStart={positionStart}
        positionFinish={positionFinish}
        onChoseCell={onChoseCell}
        isFinishShowSteps={isFinishShowSteps}
        isGameFinished={isGameFinished} />
      <Steps data={steps} number={stepsNumber} onFinishShowSteps={onFinishShowSteps} />
    </div>
  )
}

export default Body;
