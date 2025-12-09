import getButtonStyling from "./getButtonStyling.js";

function Button({ text, onClickHandler, styleType = "primary", type="button" }) {

    console.log(text); // object

    return (
        <button 
            onClick={onClickHandler}
            type={type}
            className={`${getButtonStyling(styleType)} px-4 py-2` }
        >
            {text}
        </button>
    );
}



export default Button;