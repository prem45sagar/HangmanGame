import { FaPause, FaPlay, FaVolumeUp, FaTimes, FaRedo, FaHome } from "react-icons/fa";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function PauseButton({ isPaused, onPauseToggle, volume, onVolumeChange, onRestart, className = "" }) {
  const volumeSliderRef = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={onPauseToggle}
        className={`w-12 h-12 rounded-full bg-red-500 text-white text-2xl flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 z-20 ${className}`}
      >
        {isPaused ? <FaPlay /> : <FaPause />}
      </button>

      {isPaused && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-5">
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-[500px] mx-6 relative">
            <button
              onClick={onPauseToggle}
              className="absolute top-6 right-6 text-2xl text-red-500 hover:text-red-700"
            >
              <FaTimes />
            </button>

            <h1 className="text-4xl font-bold mb-8 text-center">Paused</h1>
            
            <div className="flex items-center justify-center mb-8 gap-4">
              <FaVolumeUp className="text-blue-500 text-2xl" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={onVolumeChange}
                ref={volumeSliderRef}
                className="w-32 h-2.5 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #ff9e9e 0%, #ff9e9e ${volume}%, #f0f0f0 ${volume}%, #f0f0f0 100%)` 
                }}
              />
            </div>
            
            <div className="flex justify-center gap-6">
              <button
                onClick={() => navigate('/')}
                className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-blue-500 hover:bg-gray-100 transition-colors"
                title="Home"
              >
                <FaHome />
              </button>
              <button
                onClick={onRestart}
                className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-orange-500 hover:bg-gray-100 transition-colors"
                title="Restart"
              >
                <FaRedo />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PauseButton;