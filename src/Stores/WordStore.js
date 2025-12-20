import {create} from 'zustand'

// create function creates a store for us

const useWordStore = create((set) => ({
    wordList: [],
    word: '',
    wordHint: '',
    
    setWordList: (list) => set({ wordList: list }),
    setWord: (word) => set({ word }),
    setWordHint: (wordHint) => set({ wordHint }),
    
    fetchRandomWord: async () => {
        try {
            const response = await fetch('http://localhost:3000/words');
            const words = await response.json();
            const randomIndex = Math.floor(Math.random() * words.length);
            const randomWord = words[randomIndex];
            set({ 
                word: randomWord.wordValue,
                wordHint: randomWord.wordHint || ''
            });
        } catch (error) {
            console.error('Error fetching random word:', error);
        }
    }
}));
export default useWordStore;