import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect} from "react";
// import { WordContext } from "../Context/WordContext";
import useWordStore from "../Stores/WordStore";
import SinglePlayerImg from "../assets/Images/SinglePlayer.png";
import MultiPlayerImg from "../assets/Images/MultiPlayer.png";

function Home() {

    // const{setWord} = useContext(WordContext);

    const {setWordList, setWord, setWordHint} = useWordStore(); // coming from the store

    async function fetchWords(){
        const response = await fetch('http://localhost:3000/words')
        const data = await response.json();
        console.log(data);

        setWordList([...data])

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);
        setWordHint(data[randomIndex].wordHint);
    }

    useEffect(()=>{
        fetchWords();
    },[]);

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
    )

}

export default Home;