/* eslint-disable no-plusplus */

import React from 'react';

const createDigits = () => {
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(
      <button type="button" key={i}>{i}</button>,
    );
  }
  return digits;
};

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <span className="result">0</span>
        </div>

        <div className="buttons">
          <div className="digits">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            {createDigits()}
            <button className="span-row" type="button">0</button>
            <button className="s" type="button">.</button>
          </div>

          <div className="operators">
            <button className="operator" type="button">/</button>
            <button className="operator" type="button">+</button>
            <button className="operator" type="button">-</button>
            <button className="operator" type="button">*</button>
            <button className="operator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
