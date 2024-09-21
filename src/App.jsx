import { useState } from 'react';
import './App.css';
import headImage from './assets/Head.jpg';
import tailImage from './assets/Tail.jpg';

function App() {
  const [flip, setFlip] = useState(null);

  function handleFlip() {
    const circle = document.querySelector('.circle');
    circle.animate(
      [
        { transform: 'rotate(0deg) rotateX(0deg) translate(10px)' },
        { transform: 'rotate(360deg) rotateX(360deg) translate(10px)' },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );

    // Simulating the flip with Math.random() and updating the state
    const randomFlip = Math.random() > 0.5; // true for Head, false for Tail
    setFlip(randomFlip);
  }

  return (
    <>
      <div className="heading">
        <h1 style={{ fontSize: '30px' }}>Flip a Coin</h1>
        <button className="button" onClick={handleFlip}>Flip</button>
      </div>

      <div className="container">
        {/* Circle for coin */}
        <div className="circle">
          {/* Conditional rendering for Head or Tail image */}
          {flip !== null && (
            <img
              src={flip ? headImage : tailImage}
              alt={flip ? 'Head' : 'Tail'}
              className="coin-image"
            />
          )}
        </div>
        {/* Conditional rendering for Head or Tail text */}
        <div className={`text ${flip === true ? 'show' : 'hidden'}`}>Head</div>
        <div className={`text ${flip === false ? 'show' : 'hidden'}`}>Tail</div>
      </div>
    </>
  );
}

export default App;
