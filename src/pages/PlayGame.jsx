import { Link, useSearchParams, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";
import Hangman from "../components/Hangman/Hangman";

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

    const { state } = useLocation();
    const [ guessedLetters, setGuessedLetters ] = useState([]);

    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if(state.wordselected.toUpperCase().includes(letter)) {
            console.log('Correct Letter');
        }
        else{
            console.log('Incorrect Letter');
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <div>
            <h1>Play Game Page</h1>
            <MaskedText text={state.wordselected} guessedLetters={guessedLetters} />
            <div>
                <LetterButton text={state.wordselected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>
            <div>
                <Hangman step={step} />
            </div>
            <Link to="/start" className="text-blue-400">Start Game Link</Link>

            
        </div>

    )
}

export default PlayGame;