import { Link, useSearchParams, useParams, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import Hangman from "../components/Hangman/Hangman";
// import { WordContext } from "../Context/WordContext";
import useWordStore from "../Stores/WordStore";

function PlayGame() {

    {/* 1st Method through this we can fetch the query parameters */}

    {/* Using useSearchParams to read query parameters from the URL */}
    {/* 
        const [searchParams] = useSearchParams();
        console.log(searchParams.get("text")); // Get the value of the text query parameter
    */}


    {/* 2nd Method through this we can fetch the path parameters */}

    {/* Using useParams to read path parameters from the URL */}
    {/* 
        const {text} = useParams();
        console.log(text); // Get the value of the text path parameter
    */}

    {/* 3rd Method through this we can fetch the location state parameters */}
    {/* 
        const { state } = useLocation(); 
        console.log(state.text); // Get the value of the text location parameter

    */}


    const {wordList,word} = useWordStore();

    const [ guessedLetters, setGuessedLetters ] = useState([]);

    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if(word?.toUpperCase().includes(letter)) {
            console.log('Correct Letter');
        }
        else{
            console.log('Incorrect Letter');
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <>
            <h1>Play Game</h1>

            {wordList.map((word) => {
                return <li key={word.id}>{word.wordValue}</li>
            })}

            {word && (
                <>
                    <MaskedText text={word} guessedLetters={guessedLetters} />
                    <div>
                        <LetterButton text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                    </div>
                    <div>
                        <Hangman step={step} />
                    </div>
                </>
            )}
            <Link to="/">Home</Link>
            <br />
            <Link to='/start' className='text-blue-400'>Start Game Link</Link>
        </>
    );
}

export default PlayGame;