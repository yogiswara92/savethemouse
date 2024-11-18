import React, { useState } from 'react';

interface QuestionInputProps {
  onSubmitQuestions: (questions: number[]) => void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ onSubmitQuestions }) => {
  const [currentNumber, setCurrentNumber] = useState<string>('');
  const [questions, setQuestions] = useState<number[]>([]);

  const handleAddNumber = () => {
    if (currentNumber.trim() !== '') {
      setQuestions([...questions, parseInt(currentNumber, 10)]);
      setCurrentNumber('');
    }
  };

  const handleFinishInput = () => {
    onSubmitQuestions(questions);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#000000' }}>
        Save The Mouse!{' '}
        <div style={{ fontSize: '12px' }}>by Yogiswara Gheartha</div>
      </h1>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Input Numbers</h2>
        <input
          type="number"
          value={currentNumber}
          onChange={(e) => setCurrentNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={handleAddNumber}>Add Number</button>
        <button onClick={handleFinishInput}>Finish</button>
        <div>
          <h4>Numbers Added:</h4>
          <p>{questions.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionInput;
