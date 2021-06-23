import React from 'react';

function QuestionRadio() {
  return (
    <div className="question__answers">
      <input className="question__input" id="one" type="radio" name="checkAnswer" />
      <label className="question__input-label" htmlFor="one">Febrari</label>

      <input className="question__input" id="two" type="radio" name="checkAnswer" />
      <label className="question__input-label" htmlFor="two">Jaunvary</label>
    </div>
  );
}

export default QuestionRadio;
