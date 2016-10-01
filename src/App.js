import React, { Component } from 'react';
import './App.css';

class App extends Component {
  static defaultProps = {
    maxValue: 10,
    minValue: 0
  }
  static propTypes = {
    maxValue: React.PropTypes.number,
    minValue: React.PropTypes.number   
  }
  state = {
    value: 5
  }
  increment() {
    this.setState({ value: ++this.state.value % (this.props.maxValue+1) });
  }
  decrement() {
    this.setState({ value: --this.state.value === (this.props.minValue-1) ? this.props.maxValue : this.state.value  });
  }
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div id="number">{this.state.value}</div>
        <button id="up" onClick={this.increment}>Up</button>
        <button id="down" onClick={this.decrement}>Down</button>
      </div>
    );
  }
}

export default App;
