import { Link, useSearchParams, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";

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

    return (
        <div>
            <h1>{state.wordselected}</h1>
            <h1>Play Game Page</h1>
            <MaskedText text={state.wordselected} guessedLetters={[]} />
            <Link to="/start" className="text-blue-400">Start Game Link</Link>

            
        </div>

    )
}

export default PlayGame;