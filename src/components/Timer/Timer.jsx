import React from 'react';
import styled from 'styled-components';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5
    };

    window.setInterval(() => {
      this.setState({
        time: this.state.time - 1
      })
    }, 1000);
  };

  render() {
  return <CountDown>残り時間：{ this.state.time }</CountDown>
  };
};

const CountDown = styled.p`
  font-size: 16px;
`

export default Timer;