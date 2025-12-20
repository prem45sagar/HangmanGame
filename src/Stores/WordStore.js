import { create } from 'zustand';

const useWordStore = create((set) => ({
    word: '',
    wordHint: '',

    setWord: (word) => set({ word: word.toUpperCase() }),
    setWordHint: (hint) => set({ wordHint: hint }),

    fetchRandomWord: () => {
        const randomIndex = Math.floor(Math.random() * fallbackWords.length);
        const randomWord = fallbackWords[randomIndex];

        set({
            word: randomWord.wordValue.toUpperCase(),
            wordHint: randomWord.wordHint
        });
    }
}));

const fallbackWords = [
    { wordValue: "Mango", wordHint: "A fruit" },
    { wordValue: "Banana", wordHint: "A yellow fruit" },
    { wordValue: "Orange", wordHint: "A citrus fruit" },
    { wordValue: "Grape", wordHint: "Small purple or green fruit" },
    { wordValue: "Watermelon", wordHint: "A large sweet fruit" },
    { wordValue: "Strawberry", wordHint: "A red berry" },
    { wordValue: "Pineapple", wordHint: "A tropical fruit" },
    { wordValue: "Coconut", wordHint: "A tropical nut" },
    { wordValue: "Dragon", wordHint: "A legendary creature" },
    { wordValue: "Phoenix", wordHint: "A mythical bird" },
    { wordValue: "Unicorn", wordHint: "A magical horse" },
    { wordValue: "Forest", wordHint: "A large wooded area" },
    { wordValue: "Desert", wordHint: "A dry sandy region" },
    { wordValue: "River", wordHint: "A flowing body of water" },
    { wordValue: "Mountain", wordHint: "A high landform" },
    { wordValue: "Ocean", wordHint: "A large body of water" },
    { wordValue: "Tiger", wordHint: "A striped big cat" },
    { wordValue: "India", wordHint: "A country" },
    { wordValue: "London", wordHint: "A city in England" }
];

export default useWordStore;
