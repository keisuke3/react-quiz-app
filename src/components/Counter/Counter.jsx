import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <CounterTitle>{this.state.count}</CounterTitle>
        <span onClick={() => this.increment()}>
          <Button>インクリメント</Button>
        </span>
        <span onClick={() => this.decrement()}>
          <Button>デクリメント</Button>
        </span>
      </div>
    );
  }
};

const CounterTitle = styled.p`
  color: green;
  `

  export { Counter };