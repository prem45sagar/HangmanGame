import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    return (
        <div className="page-shell page-animate">
            <div className="card stack-lg">
                <div className="section-animate">
                    <h1 className="title">Multiplayer</h1>
                    <p className="subtitle">Set a secret word and hint. Hand it off, then head to Play.</p>
                </div>
                <div className="section-animate delay-1">
                    <TextInputFormContainer />
                </div>
            </div>
        </div>
    )
}

export default StartGame;