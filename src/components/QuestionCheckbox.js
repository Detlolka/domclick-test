import React from 'react';

function QuestionCheckbox() {
  return (
    <div className="question__answers question__answers_checkbox">
      <input className="question__input" id="one" type="checkbox" name="checkAnswer" />
      <label className="question__input-label" htmlFor="one">Febrari</label>

      <input className="question__input" id="two" type="checkbox" name="checkAnswer" />
      <label className="question__input-label" htmlFor="two">Jaunvary</label>

      <input className="question__input" id="three" type="checkbox" name="checkAnswer" />
      <label className="question__input-label" htmlFor="three">Jaunvary</label>

      <input className="question__input" id="four" type="checkbox" name="checkAnswer" />
      <label className="question__input-label" htmlFor="four">Jaunvary</label>
    </div>
  );
}

export default QuestionCheckbox;
