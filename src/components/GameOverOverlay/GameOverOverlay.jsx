import { FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";
import Hangman from "../Hangman/Hangman";

function GameOverOverlay({ word, score, gems, onPlayAgain, className = "" }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${className}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(2px)' }}>
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center relative overflow-hidden mx-4">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-pink-500"></div>
        
        <div className="mt-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Game Over</h1>
          <p className="text-gray-600">The word was: <span className="font-bold text-blue-600">{word}</span></p>
        </div>

        {/* Hangman */}
        <div className="w-48 h-48 mx-auto mb-6">
          <Hangman step={7} className="mx-auto" />
        </div>

        {/* Score and Gems */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg mb-2">
              <span className="text-xl font-bold">${score}</span>
            </div>
            <span className="text-gray-700 font-medium">Coins</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg mb-2">
              <span className="text-xl font-bold">{gems}</span>
            </div>
            <span className="text-gray-700 font-medium">Gems</span>
          </div>
        </div>

        {/* Retry Button */}
        <motion.button
          onClick={onPlayAgain}
          className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg mx-auto mb-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaRedo className="text-2xl" />
        </motion.button>
        <p className="text-sm text-gray-500">Tap to retry</p>
      </div>
    </div>
  );
}

export default GameOverOverlay;