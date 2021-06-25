import React, { useState, useEffect } from 'react';
import './style/index.scss';
import Header from './Header';
import Question from './Question';
import Footer from './Footer';
import getQuestions from '../utils/QuestionApi';
import { ansSort } from '../utils/utils';

function App() {
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [selectAnswers, setSelectAnswers] = useState([]);
  const [result, setResult] = useState({
    succes: 0,
    fail: 0,
    totalAnswers: 0
  });
  console.log(result);
  console.log(difficulty);

  useEffect(() => {
    if (!questions.length) {
      getQuestions()
        .then(data => setQuestions(data.results));
    }
  }, [questions]);

  function checkAnswers() {
    const checkResult = ansSort(correctAnswer) === ansSort(selectAnswers);
    if (checkResult) {
      setResult({ ...result, succes: result.succes + 1 });
    }
    setResult({ ...result, fail: result.fail + 1 });
  }

  function onNext() {
    if (step === questions.length - 1) {
      return;
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
    setSelectAnswers([...selectAnswers, answer]);
  }

  return (
    <div className="page">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
