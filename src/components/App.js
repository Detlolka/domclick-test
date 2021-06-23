import React from 'react';
import './style/index.scss';
import Header from './Header';
import Question from './Question';
import getQuestions from '../utils/QuestionApi';

function App() {
  getQuestions().then(data => console.log(data.results));

  return (
    <div className="page">
      <Header />
      <Question />
    </div>
  );
}

export default App;
