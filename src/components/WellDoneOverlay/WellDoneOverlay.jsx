import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function WellDoneOverlay({ score, gems, onContinue, className = "" }) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-5 ${className}`}>
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        
        <div className="mt-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Well Done!</h1>
          <p className="text-gray-600">You guessed it right!</p>
        </div>

        {/* Score and Gems */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg mb-2">
              <span className="text-2xl font-bold">${score}</span>
            </div>
            <span className="text-gray-700 font-medium">Coins</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center shadow-lg mb-2">
              <span className="text-2xl font-bold">{gems}</span>
            </div>
            <span className="text-gray-700 font-medium">Gems</span>
          </div>
        </div>

        {/* Continue Button */}
        <motion.button
          onClick={onContinue}
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg mx-auto mb-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowRight className="text-2xl" />
        </motion.button>
        <p className="text-sm text-gray-500">Tap to continue</p>
      </div>
    </div>
  );
}

export default WellDoneOverlay;
