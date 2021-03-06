import React, { useState, useEffect } from 'react';
import './style/index.scss';
import Header from './Header';
import Question from './Question';
import Result from './Results';
import Footer from './Footer';
import getQuestions from '../utils/QuestionApi';
import { ansSort } from '../utils/utils';

function App() {
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [selectAnswers, setSelectAnswers] = useState([]);
  const [result, setResult] = useState([]);
  const [wathResult, setWatchResult] = useState(false);

  useEffect(() => {
    if (!questions.length) {
      getQuestions()
        .then(data => setQuestions(data.results));
    }
  }, [questions]);

  function checkAnswers() {
    const checkResult = ansSort(correctAnswer) === ansSort(selectAnswers);
    const handleResult = checkResult ? `${difficulty}True` : `${difficulty}False`;
    setResult([...result, handleResult, difficulty]);
  }

  function onNext() {
    if (step === questions.length - 1) {
      setWatchResult(true);
    }
    checkAnswers();
    setSelectAnswers([]);
    setStep(step + 1);
  }

  function handleAnswer(answer, type) {
    if (type === 'radio') {
      setSelectAnswers([answer]);
      return;
    }
    if (selectAnswers.includes(answer)) {
      const deleteAnswer = selectAnswers.filter(k => k !== answer);
      setSelectAnswers([...deleteAnswer]);
      return;
    }
    setSelectAnswers([...selectAnswers, answer]);
  }

  return (
    <div className="page">
      <Header />
      {wathResult ? (
        <Result result={result} totalQuestions={questions} />
      )
        : (
          <Question
            questions={questions}
            currentQuestion={questions[step]}
            onNext={onNext}
            questionNumber={step}
            setCorrectAnswer={setCorrectAnswer}
            setDifficulty={setDifficulty}
            handleAnswer={handleAnswer}
            availabilityAnswer={selectAnswers}
          />
        )}
      <Footer />
    </div>
  );
}

export default App;
