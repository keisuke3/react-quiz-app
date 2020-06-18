import React from 'react';
import styled from 'styled-components';
import { QuizPageButton } from '../Button/Button';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Title>クイズアプリ</Title>
        <QuizPageButton
          onClickHandler={() => { this.props.history.push('/quiz')}}
        >
          クイズスタート
        </QuizPageButton>
      </div>
    );
  }
};

const Title = styled.h1`
  margin-bottom: 20px;
`

export default Home;
