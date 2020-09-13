import React from 'react';
import './style.css';

import Game from '../game';

const App = () => {
  return (
    <div className="app">
      <section className="section">
        <div className="container">
          <h1 className="section__title">Hidden maze</h1>

          <Game />
        </div>
      </section>
    </div>
  );
}

export default App;
