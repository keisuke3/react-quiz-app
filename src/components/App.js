import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import  { resetStyle, baseStyle } from '../utils/styles';
import Quiz from './Quiz/Quiz';
import Home from './Home/Home';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}
  ${baseStyle}
`

function App() {
  return (
    <Root>
      <GlobalStyle />
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/quiz' exact component={Quiz} />
      </Router>
    </Root>
  );
};

const Root = styled.main`
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
  width: 80%;
`


export default App;
