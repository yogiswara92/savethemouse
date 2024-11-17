import React, { useState } from 'react';
import './GamePlay.css';

interface GamePlayProps {
  questions: number[];
  onRestart: () => void;
}

const GamePlay: React.FC<GamePlayProps> = ({ questions, onRestart }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleButtonClick = (value: string) => {
    if (value === 'Masukkan') {
      if (parseInt(guess, 10) === questions[currentIndex]) {
        setMessage('Tebakan benar! Lanjut ke angka berikutnya.');
        if (currentIndex + 1 === questions.length) {
          setIsFinished(true); // Tandai permainan selesai
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        setGuess('');
      } else {
        setMessage('Tebakan salah! Coba lagi.');
      }
    } else if (value === 'Hapus') {
      setGuess('');
    } else {
      setGuess(guess + value);
    }
  };

  if (isFinished) {
    return (
      <div className="gameplay-container">
        <h1 style={{ color: '#4CAF50' }}>Selamat!</h1>
        <p style={{ fontSize: '1.5rem', color: '#FF9800' }}>
          Anda telah membuka semua kunci dan berhasil menyelamatkan monkey!
        </p>
        <button
          onClick={onRestart}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#FF5722',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Ulangi Permainan
        </button>
      </div>
    );
  }

  return (
    <div className="gameplay-container">
      <h2 style={{ color: '#FF5722' }}>Buka Kunci ke-{currentIndex + 1}</h2>
      <div className="display">{guess}</div>
      <div className="keypad">
        {[...Array(10).keys()].map((num) => (
          <button
            key={num}
            onClick={() => handleButtonClick(num.toString())}
            className="button"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleButtonClick('Hapus')}
          className="button special"
          style={{ fontSize: '17px' }}
        >
          Hapus
        </button>
        <button
          onClick={() => handleButtonClick('Masukkan')}
          className="button special"
          style={{ fontSize: '17px', backgroundColor: 'green' }}
        >
          Konfirm!
        </button>
      </div>
      <p style={{ color: '#FF9800' }}>{message}</p>
      <p>Ada {questions.length} kunci yang harus dibuka!</p>
      <p style={{ fontSize: '12px' }}>by Yogiswara Gheartha</p>
    </div>
  );
};

export default GamePlay;
