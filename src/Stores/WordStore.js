import {create} from 'zustand'

// create function creates a store for us

const useWordStore = create((set) => ({
    wordList: [],
    word: '',
    wordHint: '',
    setWordList: (list) => {
        set((state) => {
            console.log("state printing", state);
            //whatever you return from here will be the new state
            return {
                ...state,
                wordList: list
            }
        });
    },
    setWord: (newWord) => {
        set((state) => {
            return {
                ...state,
                word: newWord
            }
        });
    },
    setWordHint: (newHint) => {
        set((state) => {
            return {
                ...state,
                wordHint: newHint
            }
        });
    }
}));

export default useWordStore;