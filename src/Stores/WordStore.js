import { create } from 'zustand';

const useWordStore = create((set) => ({
    word: '',
    wordHint: '',
    
    setWord: (word) => set({ word: word.toUpperCase() }),
    setWordHint: (hint) => set({ wordHint: hint }),
    
    fetchRandomWord: async () => {
        try {
            const response = await fetch('http://localhost:3000/words');
            const words = await response.json();
            const randomIndex = Math.floor(Math.random() * words.length);
            const randomWord = words[randomIndex];
            set({ 
                word: randomWord.wordValue.toUpperCase(),
                wordHint: randomWord.wordHint || 'No hint available'
            });
        } catch (error) {
            console.error('Error fetching random word:', error);
            // Fallback words in case API fails
            const fallbackWords = [
                { wordValue: "REACT", wordHint: "A JavaScript library" },
                { wordValue: "JAVASCRIPT", wordHint: "A programming language" }
            ];
            const randomIndex = Math.floor(Math.random() * fallbackWords.length);
            const randomWord = fallbackWords[randomIndex];
            set({ 
                word: randomWord.wordValue,
                wordHint: randomWord.wordHint
            });
        }
    }
}));

export default useWordStore;
