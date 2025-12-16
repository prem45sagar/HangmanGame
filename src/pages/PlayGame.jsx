import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import Hangman from "../components/Hangman/Hangman";
import useWordStore from "../Stores/WordStore";
import { FaPause, FaPlay, FaVolumeUp, FaHome, FaRedo, FaTimes } from "react-icons/fa";

function PlayGame() {
  const { word, wordHint } = useWordStore();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState(50);
  const volumeSliderRef = useRef(null);

  function handleLetterClick(letter) {
    if (isPaused) return; // Don't process letter clicks when paused
    
    if (word?.toUpperCase().includes(letter)) {
      console.log('Correct Letter');
    } else {
      console.log('Incorrect Letter');
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleRestart = () => {
    setGuessedLetters([]);
    setStep(0);
    setIsPaused(false);
  };

  return (
    <div className="page-shell page-animate relative min-h-screen">
      {/* Pause Button */}
      <button
        onClick={togglePause}
        className="fixed top-5 right-5 w-12 h-12 rounded-full bg-red-500 text-white text-2xl flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 z-20"
      >
        {isPaused ? <FaPlay /> : <FaPause />}
      </button>

      {/* Pause Screen Overlay */}
      {isPaused && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-30 p-5">
          <button
            onClick={togglePause}
            className="absolute top-5 right-5 text-2xl text-red-500 hover:text-red-700"
          >
            <FaTimes />
          </button>

          <h1 className="text-5xl font-bold mb-8">Paused</h1>
          
          <div className="w-full max-w-xs flex items-center mb-8">
            <FaVolumeUp className="text-blue-500 text-2xl mr-4" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              ref={volumeSliderRef}
              className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ff9e9e 0%, #ff9e9e ${volume}%, #f0f0f0 ${volume}%, #f0f0f0 100%)`
              }}
            />
          </div>
          
          <div className="flex gap-6 mt-4">
            <Link
              to="/"
              className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-orange-500 hover:bg-gray-100 transition-colors"
              title="Home"
            >
              <FaHome />
            </Link>
            <button
              onClick={handleRestart}
              className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-orange-500 hover:bg-gray-100 transition-colors"
              title="Restart"
            >
              <FaRedo />
            </button>
          </div>
        </div>
      )}

      {/* Game Content */}
      <div className={`transition-opacity duration-300 ${isPaused ? 'opacity-50' : ''}`} style={{ position: 'relative', zIndex: 10 }}>
        <div className="card stack-lg">
          <div className="section-animate">
            <h1 className="title">Play</h1>
            <p className="subtitle">Guess the word before the hangman is complete.</p>
          </div>

          {word ? (
            <div className="stack-md">
              {wordHint && (
                <p className="mb-2 section-animate delay-1">Hint: {wordHint}</p>
              )}
              <div className="section-animate delay-2 text-xl tracking-widest">
                <MaskedText text={word} guessedLetters={guessedLetters} />
              </div>
              <div className="section-animate delay-3">
                <LetterButton 
                  text={word} 
                  guessedLetters={guessedLetters} 
                  onLetterClick={handleLetterClick} 
                  disabled={isPaused}
                />
              </div>
              <div className="section-animate delay-3">
                <Hangman step={step} />
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p>No word selected. Please go back and choose a game mode.</p>
              <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
                Back to Home
              </Link>
            </div>
          )}

          <div className="section-animate delay-1 stack-sm">
            <Link to="/" className="text-blue-300 hover:underline">Home</Link>
            <Link to='/start' className='text-blue-300 hover:underline'>Set Multiplayer Word</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;