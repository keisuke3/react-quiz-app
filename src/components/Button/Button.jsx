import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
  render() {
    return (
      <ButtonWrapper>
        { this.props.children }
      </ButtonWrapper>
    );
  };
};

const ButtonWrapper = styled.button`
  color: black;
`

export { Button };