import React from 'react';
import QuestionRadio from './QustionRadio';
import QuestionCheckbox from './QuestionCheckbox';

function Question() {
  const bol = !true;
  return (
    <div className="question">
      <p className="question__category">The question of category is Sport</p>
      <p className="question__number">1/10</p>
      <div className="question__container">
        <p className="question__title">Where is my Book?</p>
        {bol ?
          <QuestionRadio /> : <QuestionCheckbox />}
        <button type="button" className="question__button">Answer</button>
      </div>
    </div>
  );
}

export default Question;
