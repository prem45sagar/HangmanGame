import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { useState } from "react";
import useWordStore from "../../Stores/WordStore";

function TextInputFormContainer() {

    const [wordValue, setWordValue] = useState(""); 
    const [wordHint, setWordHintInput] = useState(""); 
    const [wordInputType, setWordInputType] = useState("password");

    const { setWord, setWordHint } = useWordStore();

    const navigate = useNavigate(); // use Navgigate is a hook that returns a navigate function to programmatically navigate to a different route

    function handleFormSubmit(event) {
        event.preventDefault();
        if(!wordValue) return;

        // set chosen word and hint for multiplayer game
        setWord(wordValue);
        setWordHint(wordHint);

        navigate(`/play`);
    }

    function handleWordValueChange(event) {
        setWordValue(event.target.value);
    }

    function handleWordHintChange(event) {
        setWordHintInput(event.target.value);
    }

    function handleToggleWordVisibility() {
        setWordInputType((prev) => prev === "password" ? "text" : "password");
    }

    return (
        <>
            <TextInputForm
                wordValue={wordValue}
                wordHint={wordHint}
                wordInputType={wordInputType}
                handleFormSubmit={handleFormSubmit}
                handleWordValueChange={handleWordValueChange}
                handleWordHintChange={handleWordHintChange}
                handleToggleWordVisibility={handleToggleWordVisibility}
            />
        </>
    );
}

export default TextInputFormContainer;