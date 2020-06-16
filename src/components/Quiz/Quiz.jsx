import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Quiz extends React.Component {
  quizList() {
    console.log(typeof this.props.data);
    const quizList = this.props.data.map((item, index) => {
      return (<li key={index}>Q{ index + 1} : {item.question}</li>);
    });
    return quizList;
  };

  render() {
    return (
    <QuizWrapper>{this.quizList()}</QuizWrapper>
    );
  };
};

Quiz.propTypes = {
  quizData: PropTypes.array
};

const QuizWrapper = styled.ul`
  width: 400px;
`

export { Quiz };