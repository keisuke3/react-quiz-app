import QuizFetcher from '../data_fetchers/Quizfetcher';
import shuffle from 'lodash/shuffle';
import he from 'he';

class Quiz {
  constructor({ question, correctAnswer, incorrectAnswer }) {
    this._question = question;
    this._correctAnswer = correctAnswer;
    this._incorrectAnswer = [...incorrectAnswer];
  }

  get question() {
    return this._question;
  };

  get correctAnswer() {
    return this._correctAnswer;
  };

  shuffleAnswers() {
    return shuffle([
      this._correctAnswer,
      ...this._incorrectAnswer,
    ]);
  };

  judgeCorrectAnswer(answer) {
    return answer === this._correctAnswer;
  };

  static async fetchAndCreateQuizzes() {
    const quizDataList = await QuizFetcher.fetch();

    return quizDataList.data.results.map(result => {
      return {
        question: he.decode(result.question),
        correctAnswer: he.decode(result.correct_answer),
        incorrectAnswer: result.incorrect_answers.map(str => he.decode(str)),
      };
    })
    .map(quizData => {
      return new Quiz(quizData);
    });
  }
};

export default Quiz;