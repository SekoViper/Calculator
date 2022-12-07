/* eslint-disable no-plusplus */
import React from 'react';
import calculate from '../Logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonClick = this.buttonClick.bind(this);
  }

  createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button type="button" key={i} onClick={this.buttonClick}>{i}</button>,
      );
    }
    return digits;
  };

  buttonClick(element) {
    this.setState((state) => calculate(state, element.target.textContent));
  }

  render() {
    const { next } = this.state;
    const { total } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <span className="results">{next || total || 0}</span>
        </div>

        <div className="buttons">
          <div className="digits">
            <button type="button" onClick={this.buttonClick}>AC</button>
            <button type="button" onClick={this.buttonClick}>+/-</button>
            <button type="button" onClick={this.buttonClick}>%</button>
            {this.createDigits()}
            <button className="span-row" type="button" onClick={this.buttonClick}>0</button>
            <button className="s" type="button" onClick={this.buttonClick}>.</button>
          </div>

          <div className="operators">
            <button className="operator" type="button" onClick={this.buttonClick}>/</button>
            <button className="operator" type="button" onClick={this.buttonClick}>+</button>
            <button className="operator" type="button" onClick={this.buttonClick}>-</button>
            <button className="operator" type="button" onClick={this.buttonClick}>x</button>
            <button className="operator" type="button" onClick={this.buttonClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

// export default Calculator;
