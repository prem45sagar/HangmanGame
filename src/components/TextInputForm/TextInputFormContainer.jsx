import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { useState } from "react";

function TextInputFormContainer() {

    const navigate = useNavigate(); // use Navgigate is a hook that returns a navigate function to programmatically navigate to a different route

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted", value);
        if(value){
            // If we have something in the value, then we want to go the play page
            navigate('/play', {state: {wordToGuess: value}}); // navigate to play page with state
        }
        
    }

    function handleTextInputChange(event) {
        console.log("Text Input Changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show / Hide Clicked");
        if (inputType === "password") {
            setInputType("text")
        } else {
            setInputType("password")
        }
        console.log("Input Type changed to: ", inputType);
    }

    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer;