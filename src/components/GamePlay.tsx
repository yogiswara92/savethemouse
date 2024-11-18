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
        setMessage('Kunci ke ' + (currentIndex + 1) + ' terbuka!');
        if (currentIndex + 1 === questions.length) {
          setIsFinished(true); // Tandai permainan selesai
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        setGuess('');
      } else {
        setMessage('Pin salah! Coba lagi.');
      }
    } else if (value === 'Hapus') {
      setGuess('');
    } else {
      setGuess(guess + value);
    }
  };

  if (isFinished) {
    return (
      <div
        className="win-container"
        style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}
      >
        <div
          className="konten"
          style={{ textAlign: 'center', padding: '20px' }}
        >
          <h2 style={{ color: '#4CAF50' }}>Selamat!</h2>
          <p style={{ fontSize: '1.5rem', color: '#FF9800' }}>
            Anda telah membuka semua kunci dan berhasil menyelamatkan Mouse!
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
      </div>
    );
  }

  return (
    <div
      className="gameplay-container"
      style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}
    >
      <h1 style={{ textAlign: 'center', color: '#fff' }}>
        Save The Mouse!{' '}
        <div style={{ fontSize: '12px' }}>by Yogiswara Gheartha</div>
      </h1>

      <div className="konten">
        <div>
          <h3 style={{ color: '#FF5722' }}>
            Buka Kunci ke-{currentIndex + 1}
            <div style={{ fontSize: '12px' }}>
              Ada {questions.length} kunci yang harus dibuka!{' '}
            </div>
            {Array.from({ length: currentIndex }, (num) => (
              <i
                style={{ fontSize: '12px', margin: '1px', color: 'green' }}
                className="fas fa-lock-open"
              ></i>
            ))}
            {Array.from({ length: questions.length - currentIndex }, (num) => (
              <i
                style={{ fontSize: '12px', margin: '1px' }}
                className="fas fa-lock"
              ></i>
            ))}
          </h3>

          <div className="display">{guess}</div>
          <div className="keypad">
            {/* {[...Array(10).keys()].map((num) => (
          <button
            key={num}
            onClick={() => handleButtonClick(num.toString())}
            className="button"
          >
            {num}
          </button>
        ))} */}
            {Array.from({ length: 10 }, (_, num) => (
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
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
