import TextInputForm from "./TextInputForm";
import { useState } from "react";

function TextInputcontainer() {

    const [inputType, setInputType] = useState("password");

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted");
    }

    function handleTextInputChange(event) {
        console.log("Text Input Changed");
        console.log(event.target.value);
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

export default TextInputcontainer;