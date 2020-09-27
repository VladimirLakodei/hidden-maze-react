import React from 'react';
import './style.css';

const Step = (props) => {
  return (<div className="step">{props.stepDirection} {props.isVisible}</div>);
}

export default Step;
