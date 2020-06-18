import React from 'react';
import styled from 'styled-components';

export class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClickHandler}
      >
        { this.props.children }
      </button>
    );
  };
};

export const AnswerButton = styled(Button)`
  padding: 0.3em 1em;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .4s;
  width: 400px;

  &:hover {
    background: #67c5ff;
    color: white;
  }
`

export const QuizPageButton = styled(AnswerButton)`
  padding: 0.25em 0.5em;
  color: #FFF;
  background: #03A9F4;
  border: solid 1px #0f9ada;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
  width: auto;

  &:active {
    border: solid 1px #03A9F4;
    box-shadow: none;
    text-shadow: none;
  }
`
export const RestartButton = styled(AnswerButton)`
  width: auto;
  margin-bottom: 20px;
`