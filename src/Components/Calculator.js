/* eslint-disable */ 
import { React, useState } from 'react';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button type="button" key={i} onClick={buttonClick}>{i}</button>,
      );
    }
    return digits;
  };

  const buttonClick = (element) => {
    setState((state) => calculate(state, element.target.textContent));
  };

  const { next, total, operation } = state;
  return (
    <div className="calculator">
      <div className="display">
        <span data-testid="total" className="results">{total || total || 0}</span>
        <span className="operation">{operation}</span>
        <span className="next">{next}</span>
      </div>

      <div className="buttons">
        <div className="digits">
          <button type="button" onClick={buttonClick}>AC</button>
          <button type="button" onClick={buttonClick}>+/-</button>
          <button type="button" onClick={buttonClick}>%</button>
          {createDigits()}
          <button className="span-row" type="button" onClick={buttonClick}>0</button>
          <button className="s" type="button" onClick={buttonClick}>.</button>
        </div>

        <div className="operators">
          <button className="operator" type="button" onClick={buttonClick}>÷</button>
          <button className="operator" type="button" onClick={buttonClick}>+</button>
          <button className="operator" type="button" onClick={buttonClick}>-</button>
          <button className="operator" type="button" onClick={buttonClick}>x</button>
          <button className="operator" type="button" onClick={buttonClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
