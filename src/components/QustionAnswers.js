import React from 'react';
import { reg } from '../utils/constants';

function QuestionAnswers({
  inputType, answer, id, handleAnswer
}) {
  const correctAnswer = answer.replace(reg, '');
  function handleInput(evt) {
    if (handleAnswer) {
      handleAnswer(evt.target.value, evt.target.type);
    }
  }
  return (
    <div>
      <input className="question__input" id={id} type={inputType} name="checkAnswer" value={correctAnswer} onChange={handleInput} />
      <label className="question__input-label" htmlFor={id}>{correctAnswer}</label>
    </div>
  );
}

export default QuestionAnswers;
