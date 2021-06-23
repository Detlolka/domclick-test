import React from 'react';
import './style/index.scss';
import Header from './Header';
import getQuestions from '../utils/QuestionApi';

function App() {
  getQuestions().then(data => console.log(data.results));

  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default App;
