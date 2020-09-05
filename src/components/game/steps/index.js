import React, { Component } from 'react';
import './style.css';

import Step from '../step';

class Steps extends Component {
  state = {
    steps: [],
  };

  createSteps(number) {
    let count = 0;
    const steps = new Array(number);

    for (let i = 0; i < steps.length; i++) {
      steps[i] = {
        id: count++,
      };
    }

    this.setState({ steps });
  }

  componentDidMount() {
    this.createSteps(this.props.number);
  }

  render() {
    const { steps } = this.state;
    
    const content = steps.map((item) => {
      return <Step key={item.id} />;
    });

    return (
      <div className="steps">
        { content }
      </div>
    );
  }
}

export default Steps;
