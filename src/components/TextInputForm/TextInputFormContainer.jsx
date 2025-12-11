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
        navigate(`/play`, { state: { wordselected: value } }); // Navigate to the /play route with the entered text as a query parameter
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