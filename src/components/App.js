import React from 'react';
import './style/index.scss';
import Header from './Header';
import Question from './Question';
import Footer from './Footer';
import getQuestions from '../utils/QuestionApi';

function App() {
  getQuestions().then(data => console.log(data.results));

  return (
    <div className="page">
      <Header />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
