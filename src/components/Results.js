import React from 'react';

function Result({ result, totalQuestions }) {
  const staticAnswers = result.reduce((obj, key) => {
    if (!obj[key]) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }
    return obj;
  }, {});

  return (
    <div className="results">
      <h2 className="results__title">
        Total Questions:&nbsp;
        {totalQuestions.length}
      </h2>
      <div className="results__containers">
        <div className="results__container">
          <h3 className="results__type">
            Hard Questions:&nbsp;
            {staticAnswers.hard || '0'}
          </h3>
          <p className="results__score">
            Correct:&nbsp;
            {staticAnswers.hardTrue || '0'}
          </p>
          <p className="results__score">
            Incorrect:&nbsp;
            {staticAnswers.hardFalse || '0'}
          </p>
        </div>
        <div className="results__container">
          <h3 className="results__type">
            Medium Questions:&nbsp;
            {staticAnswers.medium || '0'}
          </h3>
          <p className="results__score">
            Correct:&nbsp;
            {staticAnswers.mediumTrue || '0'}
          </p>
          <p className="results__score">
            Incorrect:&nbsp;
            {staticAnswers.mediumFalse || '0'}
          </p>
        </div>
        <div className="results__container">
          <h3 className="results__type">
            Easy Questions:&nbsp;
            {staticAnswers.easy || '0'}
          </h3>
          <p className="results__score">
            Correct:&nbsp;
            {staticAnswers.easyTrue || '0'}
          </p>
          <p className="results__score">
            Incorrect:&nbsp;
            {staticAnswers.easyFalse || '0'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
