import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
import useWordStore from "../Stores/WordStore";
import SinglePlayerImg from "../assets/Images/SinglePlayer.png";
import MultiPlayerImg from "../assets/Images/MultiPlayer.png";

function Home() {
    const { fetchRandomWord } = useWordStore();

    // Set initial word when component mounts
    useEffect(() => {
        fetchRandomWord();
    }, [fetchRandomWord]);

    return (
        <div className="page-shell page-animate">
            <div className="card stack-lg">
                <header className="section-animate">
                    <h1 className="title">Hangman</h1>
                    <p className="subtitle">A clean, modern take on the classic word-guessing challenge.</p>
                </header>
                <div className="section-animate delay-1 card-grid">
                    <Link to="/play">
                        <div className="choice-card singleplayer">
                            <div className="art">
                                <img src={SinglePlayerImg} alt="Single player card" />
                            </div>
                            <div className="label">Single Player</div>
                        </div>
                    </Link>
                    <Link to="/start">
                        <div className="choice-card multiplayer">
                            <div className="art">
                                <img src={MultiPlayerImg} alt="Multiplayer card" />
                            </div>
                            <div className="label">Multiplayer</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;