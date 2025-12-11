
const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButton({text, guessedLetters, onLetterClick}) {

    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonstyle = function(letter)  {
        if(guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-600 cursor-not-allowed' : 'bg-red-500 cursor-not-allowed'}`;
        }
        else {
            return 'bg-blue-500 hover:bg-blue-700';
        }
    };

    function handleLetterClick(event) {
        const characterOftheLetter = event.target.innerText;
        onLetterClick?.(characterOftheLetter);
    }

    const buttons = ALPHABETS.map(letter => {
        return (
            <button key={`button-${letter}`}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-full font-bold text-lg ${buttonstyle(letter)}`}>
                {letter}
            </button>
        )
            
    })


    return (
        <>
            {buttons}
        </>
    )

}

export default LetterButton;