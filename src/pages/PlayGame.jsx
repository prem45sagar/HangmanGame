import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import Hangman from "../components/Hangman/Hangman";
import useWordStore from "../Stores/WordStore";
import PauseButton from "../components/PauseButton/PauseButton";
import WellDoneOverlay from "../components/WellDoneOverlay/WellDoneOverlay";
import GameOverOverlay from "../components/GameOverOverlay/GameOverOverlay";
import { FaHome, FaRedo } from "react-icons/fa";

function PlayGame() {
  const { word, wordHint, fetchRandomWord } = useWordStore();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [score, setScore] = useState(0);
  const [gems, setGems] = useState(0);
  const [volume, setVolume] = useState(50);

  const calculateScore = (word, incorrectGuesses) => {
    const baseScore = 10;
    const maxIncorrect = 7; // Maximum allowed incorrect guesses
    const penaltyPerIncorrect = 5;
    const wordBonus = word.length * 5; // Bonus based on word length
    
    // Calculate score with penalty for incorrect guesses
    let finalScore = baseScore + wordBonus - (incorrectGuesses * penaltyPerIncorrect);
    
    // Ensure score doesn't go below 0
    return Math.max(0, finalScore);
  };

  const calculateGems = (word, incorrectGuesses) => {
    // Base gems + bonus for word length - penalty for incorrect guesses
    const baseGems = 5;
    const lengthBonus = Math.floor(word.length / 2);
    const incorrectPenalty = Math.floor(incorrectGuesses / 2);
    
    let gems = baseGems + lengthBonus - incorrectPenalty;
    return Math.max(1, gems); // Always give at least 1 gem
  };

  function handleLetterClick(letter) {
    if (isPaused || isGameOver || !word) return;
    
    // Don't process already guessed letters
    if (guessedLetters.includes(letter)) return;
    
    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
    
    const upperWord = word.toUpperCase();
    
    if (upperWord.includes(letter)) {
      // Check if the word is completely guessed
      const isWordGuessed = upperWord.split('').every(char => 
        newGuessedLetters.includes(char)
      );
      
      if (isWordGuessed) {
        // Calculate final score and gems
        const incorrectGuesses = newGuessedLetters.filter(l => !upperWord.includes(l)).length;
        const finalScore = calculateScore(word, incorrectGuesses);
        const gemsEarned = calculateGems(word, incorrectGuesses);
        
        setScore(prev => prev + finalScore);
        setGems(prev => prev + gemsEarned);
        setIsGameOver(true);
        setIsWinner(true);
      }
    } else {
      const newStep = step + 1;
      setStep(newStep);
      
      // Check if game over due to too many incorrect guesses
      if (newStep >= 7) {
        // On loss, don't add to score or gems
        setScore(0);
        setGems(0);
        setIsGameOver(true);
        setIsWinner(false);
      }
    }
  }

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleNewGame = async () => {
    setGuessedLetters([]);
    setStep(0);
    setIsGameOver(false);
    setIsWinner(false);
    setIsPaused(false);
    // Don't reset score and gems between games
    await fetchRandomWord();
  };

  useEffect(() => {
    if (!word) {
      fetchRandomWord();
    }
  }, [fetchRandomWord, word]);
  

  return (
    <div className="page-shell page-animate relative min-h-screen">
      <div className="container mx-auto px-4 py-5">

        {/* Well Done Overlay - shown when player wins */}
        {isGameOver && isWinner && (
          <WellDoneOverlay
            score={score}
            gems={gems}
            onContinue={handleNewGame}
          />
        )}

        {/* Game Over Overlay - shown when player loses */}
        {isGameOver && !isWinner && (
          <GameOverOverlay
            word={word}
            score={score}
            gems={gems}
            onPlayAgain={handleNewGame}
          />
        )}

        {/* Game Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div className="card stack-lg">
            {/* Top Bar - Score and Pause */}
            <div className="flex justify-between items-center mb-6">
              {/* Coin and Diamond */}
              <div className="flex items-center space-x-4">
                {/* Coin */}
                <div className="flex items-center bg-white bg-opacity-30 rounded-full px-3 py-1.5 shadow-md">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-2">
                    <span className="text-sm font-bold">$</span>
                  </div>
                  <span className="text-base font-bold">{score}</span>
                </div>
                
                {/* Diamond */}
                <div className="flex items-center bg-white bg-opacity-30 rounded-full px-3 py-1.5 shadow-md">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                    <span className="text-sm font-bold">G</span>
                  </div>
                  <span className="text-base font-bold">{gems}</span>
                </div>
              </div>

              {/* Pause Button */}
              <PauseButton
                isPaused={isPaused}
                onPauseToggle={togglePause}
                volume={volume}
                onVolumeChange={handleVolumeChange}
                onRestart={handleNewGame}
                className="w-10 h-10"
              />
            </div>

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
                    disabled={isPaused || isGameOver}
                  />
                </div>
                <div className={`section-animate delay-3 transition-transform duration-500 ${isGameOver ? 'translate-x-full' : ''}`}>
                  <Hangman step={step} className="mx-auto" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;