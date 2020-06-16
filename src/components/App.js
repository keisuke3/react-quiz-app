import React from 'react';
import { Quiz } from './Quiz/Quiz';
import { Button } from './Button/Button';

const API_URL = 'https://opentdb.com/api.php?amount=10';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      quizData: [],
    };
  }

  async fetchData() {
    this.setState({ loading: true });
    let quizData;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      quizData = data.results;
    } catch (error) {
      quizData = null;
    }
    this.setState({
      quizData: quizData,
      loading: false,
    });
  };

  renderData() {

  }

  renderRequestButton() {
    if (this.state.loading) {
      return <Button>データを取得中</Button>
    }
    return <button onClick={ () => {this.fetchData()}}>データを取得する</button>
  }

  render() {
    return (
      <div className="App">
        {this.renderRequestButton()}
        <Quiz data={this.state.quizData} />
      </div>
    );
  }
}

export default App;
