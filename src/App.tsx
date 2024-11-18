import React, { useState } from 'react';
import QuestionInput from './components/QuestionInput';
import GamePlay from './components/GamePlay';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handleQuestionsSubmit = (inputQuestions: number[]) => {
    setQuestions(inputQuestions);
    setGameStarted(true);
  };

  const handleRestart = () => {
    setQuestions([]); // Reset questions
    setGameStarted(false); // Kembali ke layar input angka
  };

  return (
    // <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
    //   <h1 style={{ textAlign: 'center', color: '#000000' }}>
    //     Save The Mouse!{' '}
    //   </h1>
    <>
      {!gameStarted ? (
        <QuestionInput onSubmitQuestions={handleQuestionsSubmit} />
      ) : (
        <GamePlay questions={questions} onRestart={handleRestart} />
      )}
    </>
  );
};

export default App;
