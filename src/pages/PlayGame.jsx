import { Link } from "react-router-dom";
import TextInputForm from "../components/TextInputForm/TextInputForm";
import { useState } from "react";


function PlayGame() {
    return (
        <div>
            <h1>Play Game Page</h1>
            <Link to="/start" className="text-blue-400">Start Game Link</Link>
            
        </div>

    )
}

export default PlayGame;