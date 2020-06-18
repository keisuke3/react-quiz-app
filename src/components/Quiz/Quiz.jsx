import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import QuizModel from '../models/Quiz';
import { AnswerButton } from '../Button/Button';
import { RestartButton } from '../Button/Button';


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      currentIndex: 0,
      numberOfCorrects: 0,
    };
  };

  async componentDidMount() {
    await this.restart();
  }

  async restart() {
    this.setState({
      quizzes: [],
      currentIndex: 0,
      numberOfCorrects: 0,
    });
    const quizzes = await QuizModel.fetchAndCreateQuizzes();
    this.setState({ quizzes });
  }

  selectAnswer(quiz, answer) {
    let { currentIndex, numberOfCorrects } = this.state;
    const isCorrect = quiz.judgeCorrectAnswer(answer);

    if (isCorrect) {
      numberOfCorrects++;
      alert('Correct answer!!');
    } else {
      alert(`Wrong answer... (The correct answer is ${quiz.correctAnswer}`);
    }
    currentIndex++;

    this.setState({
      numberOfCorrects,
      currentIndex,
    });
  };

  // ローディングページ
  renderLoading() {
    return (
      <Loading>now Loading...</Loading>
    );
  };

  //クイズページ
  renderQuiz() {
    const { quizzes, currentIndex } = this.state;
    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, index) => {
      return (
        <QuestionItem key={index}>
          <AnswerButton onClickHandler={() => {this.selectAnswer(quiz, answer)}}>
            {answer}
          </AnswerButton>
        </QuestionItem>
      )
    });
    return (
      <div>
        <Question>{quiz.question}</Question>
        <QuestionList>{answers}</QuestionList>
        <TopLink to='/'>トップページへ</TopLink>
      </div>
    )
  };

  // 結果ページ
  renderResult() {
    const { quizzes, numberOfCorrects } = this.state;

    return (
      <ResultWrapper>
        <Announcement>Result announcement</Announcement>
        <CorrectAnswer>{`${numberOfCorrects}/${quizzes.length} corrects.`}</CorrectAnswer>
        <RestartButton onClickHandler={() => {this.restart()}}>
          Restart
        </RestartButton>
        <TopLink to='/'>トップページへ</TopLink>
      </ResultWrapper>
    );
  };

  render () {
    const { quizzes, currentIndex } = this.state;
    if (quizzes.length === 0) {
      return this.renderLoading();
    }
    if (quizzes.length !== 0 && currentIndex < quizzes.length) {
      return this.renderQuiz()
    }
    if (quizzes.length > 0 && currentIndex >= quizzes.length) {
      return this.renderResult();
    }
  };
}

const Loading = styled.p`
  font-size: 20px;
`

const Question = styled.p`
  font-size:24px;
  margin-bottom: 20px;
`

const QuestionList = styled.ul`
  margin-bottom: 20px;
`

const QuestionItem = styled.li`
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }
`

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Announcement = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`

const CorrectAnswer = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`

const TopLink = styled(Link)`
  position: relative;
  display: inline-block;
  color: #1B1B1B;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

  &::after {
    position: absolute;
    bottom: -8px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
  }

  &:hover::after {
    bottom: -4px;
    opacity: 1;
    visibility: visible;
  }
`

export default Quiz;
