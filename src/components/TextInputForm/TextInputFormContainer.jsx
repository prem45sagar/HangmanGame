import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { use, useEffect, useState } from "react";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState(""); 

    const navigate = useNavigate(); // use Navgigate is a hook that returns a navigate function to programmatically navigate to a different route

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted", value);
        if(value){
            // if we have something in the value then we want to go to the play the game page
            navigate(`/play`, { state: { wordselected: value } }); // Navigate to the /play route with the entered text as a query parameter
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

    {/*
        useEffect(() => {
        console.log("Component first Load"); // not call on updates
        }, []); // passing empty dependency array

        useEffect(() => {
            console.log("Component first Load and Update");
        }); // not passing dependency array

        useEffect(() => {
            console.log("Component first Load and Update value changed");
        }, [value]); // passing value in dependency array

        useEffect(() => {
            console.log("Component first Load and inputType value changed");
        }, [inputType]);
    */}

    return (
        <>
            <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
            />
        </>
    );
}

export default TextInputFormContainer;