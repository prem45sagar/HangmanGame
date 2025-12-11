/**
 * 
 * @param {The word which is given as input and is expected to be guessed by the player} originalText
 * @param {Letter which are guessed by the user already} guessedLetters
 * Example: originalWord = HUMBLE
 * guessedLetters = ['H', 'M', 'E']
 * Return: H _ M _ _ E
 */

export function getMaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase()); // ['h', 'M', 'e'] -> ['H', 'M', 'E'] Convert guessed letters to uppercase for case-insensitive comparison
    const guessedLetterSet = new Set(guessedLetters); // Convert guessed letters array to a Set for efficient lookup
    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char)) {
            return char;
        }
        else {
            return "_";
        }
    }); // ['H', '_', 'M', '_', '_', 'E' ]

    return result; // "H _ M _ _ E"
}
