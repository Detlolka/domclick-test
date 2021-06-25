import React, { useEffect, useState } from 'react';
import QuestionAnswers from './QustionAnswers';
import { randomArr } from '../utils/utils';
import { reg } from '../utils/constants';

function Question({
  questions,
  currentQuestion,
  onNext, questionNumber,
  setCorrectAnswer,
  setDifficulty,
  handleAnswer,
  availabilityAnswer
}) {
  const [answers, setAnswers] = useState([]);
  const [inputType, setInputType] = useState('');
  console.log(inputType);

  function changeInputs() {
    const createAnswers = currentQuestion?.incorrect_answers
      .concat(currentQuestion?.correct_answer) || [];

    // shuffling the array
    const stirAnswers = randomArr(createAnswers);

    if (currentQuestion?.type === 'boolean') {
      setInputType('radio');
    } else {
      setInputType('checkbox');
    }
    setAnswers(stirAnswers);
    setCorrectAnswer([currentQuestion?.correct_answer]);
    setDifficulty(currentQuestion?.difficulty);
  }

  console.log(answers);

  useEffect(() => {
    changeInputs();
  }, [currentQuestion]);

  // удаление экранированных спецсимволов
  const question = currentQuestion?.question.replace(reg, '');

  const buttonName = questionNumber !== (questions.length - 1) ? 'Answer' : 'Results';

  return (
    <div className="question">
      <p className="question__category">
        The question of category is&nbsp;
        {currentQuestion?.category}
      </p>
      <p className="question__number">
        {questionNumber + 1}
        /
        {questions.length}
      </p>
      <div className="question__container">
        <p className="question__title">{question}</p>
        <div className="question__answers">
          {answers.map((answer, index) => (
            <QuestionAnswers
              inputType={inputType}
              answer={answer}
              key={answer}
              id={index + 1}
              handleAnswer={handleAnswer}
            />
          ))}
        </div>
        <button type="button" className="question__button" disabled={availabilityAnswer.length ? false : true} onClick={onNext}>{buttonName}</button>
      </div>
    </div>
  );
}

export default Question;
