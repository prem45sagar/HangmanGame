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
                { "wordValue": "Mango", "wordHint": "A fruit" },
                { "wordValue": "Banana", "wordHint": "A yellow fruit" },
                { "wordValue": "Orange", "wordHint": "A citrus fruit" },
                { "wordValue": "Grape", "wordHint": "Small purple or green fruit" },
                { "wordValue": "Watermelon", "wordHint": "A large sweet fruit" },
                { "wordValue": "Strawberry", "wordHint": "A red berry" },
                { "wordValue": "Pineapple", "wordHint": "A tropical fruit" },
                { "wordValue": "Coconut", "wordHint": "A tropical nut" },
                { "wordValue": "Lemon", "wordHint": "A sour yellow fruit" },
                { "wordValue": "Lime", "wordHint": "A small green citrus" },
                { "wordValue": "Peach", "wordHint": "A fuzzy stone fruit" },
                { "wordValue": "Cherry", "wordHint": "A small red fruit" },
                { "wordValue": "Blueberry", "wordHint": "A small blue fruit" },
                { "wordValue": "Blackberry", "wordHint": "A dark purple berry" },
                { "wordValue": "Kiwi", "wordHint": "A green tropical fruit" },
                { "wordValue": "Papaya", "wordHint": "An orange tropical fruit" },
                { "wordValue": "Guava", "wordHint": "A tropical fruit" },
                { "wordValue": "Muskmelon", "wordHint": "A netted melon" },
                { "wordValue": "Dragon", "wordHint": "A legendary creature" },
                { "wordValue": "Phoenix", "wordHint": "A mythical bird" },
                { "wordValue": "Unicorn", "wordHint": "A magical horse" },
                { "wordValue": "Forest", "wordHint": "A large wooded area" },
                { "wordValue": "Desert", "wordHint": "A dry sandy region" },
                { "wordValue": "Papaya", "wordHint": "An orange tropical fruit" },
                { "wordValue": "Guava", "wordHint": "A tropical fruit" },
                { "wordValue": "Muskmelon", "wordHint": "A netted melon" },
                { "wordValue": "Dragon", "wordHint": "A legendary creature" },
                { "wordValue": "Phoenix", "wordHint": "A mythical bird" },
                { "wordValue": "Unicorn", "wordHint": "A magical horse" },
                { "wordValue": "Forest", "wordHint": "A large wooded area" },
                { "wordValue": "Desert", "wordHint": "A dry sandy region" },
                { "wordValue": "River", "wordHint": "A flowing body of water" },
                { "wordValue": "Lake", "wordHint": "A body of freshwater" },
                { "wordValue": "Lake", "wordHint": "A body of freshwater" },
                { "wordValue": "Valley", "wordHint": "A low area between hills" },
                { "wordValue": "Valley", "wordHint": "A low area between hills" },
                { "wordValue": "Beach", "wordHint": "A sandy shore" },
                { "wordValue": "Island", "wordHint": "Land surrounded by water" },
                { "wordValue": "Volcano", "wordHint": "A mountain that erupts" },
                { "wordValue": "Glacier", "wordHint": "A large mass of ice" },
                { "wordValue": "Storm", "wordHint": "Severe weather" },
                { "wordValue": "Storm", "wordHint": "Severe weather" },
                { "wordValue": "Rainbow", "wordHint": "A colorful arc after rain" },
                { "wordValue": "Thunder", "wordHint": "The sound of lightning" },
                { "wordValue": "Lightning", "wordHint": "A bright electrical flash" },
                { "wordValue": "Cloud", "wordHint": "A mass of vapor" },
                { "wordValue": "Sun", "wordHint": "The star of our system" },
                { "wordValue": "Moon", "wordHint": "Earth's satellite" },
                { "wordValue": "Star", "wordHint": "A celestial object" },
                { "wordValue": "Planet", "wordHint": "A celestial body orbiting a star" },
                { "wordValue": "Galaxy", "wordHint": "A collection of stars" },
                { "wordValue": "Lightning", "wordHint": "A bright electrical flash" },
                { "wordValue": "Cloud", "wordHint": "A mass of vapor" },
                { "wordValue": "Sun", "wordHint": "The star of our system" },
                { "wordValue": "Moon", "wordHint": "Earth's satellite" },
                { "wordValue": "Star", "wordHint": "A celestial object" },
                { "wordValue": "Planet", "wordHint": "A celestial body orbiting a star" },
                { "wordValue": "Galaxy", "wordHint": "A collection of stars" },
                { "wordValue": "Cloud", "wordHint": "A mass of vapor" },
                { "wordValue": "Sun", "wordHint": "The star of our system" },
                { "wordValue": "Moon", "wordHint": "Earth's satellite" },
                { "wordValue": "Star", "wordHint": "A celestial object" },
                { "wordValue": "Planet", "wordHint": "A celestial body orbiting a star" },
                { "wordValue": "Galaxy", "wordHint": "A system of stars" },
                { "wordValue": "Apple", "wordHint": "A red fruit" },
                { "wordValue": "Moon", "wordHint": "Earth's satellite" },
                { "wordValue": "Star", "wordHint": "A celestial object" },
                { "wordValue": "Planet", "wordHint": "A celestial body orbiting a star" },
                { "wordValue": "Galaxy", "wordHint": "A system of stars" },
                { "wordValue": "Apple", "wordHint": "A red fruit" },
                { "wordValue": "Planet", "wordHint": "A celestial body orbiting a star" },
                { "wordValue": "Galaxy", "wordHint": "A system of stars" },
                { "wordValue": "Apple", "wordHint": "A red fruit" },
                { "wordValue": "Galaxy", "wordHint": "A system of stars" },
                { "wordValue": "Apple", "wordHint": "A red fruit" },
                {"wordValue": "Ocean", "wordHint": "A large body of water"},
                { "wordValue": "Mountain", "wordHint": "A high landform" },
                { "wordValue": "Tiger", "wordHint": "A striped big cat" },
                { "wordValue": "India", "wordHint": "A country" },
                { "wordValue": "London", "wordHint": "A city in England"}
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
