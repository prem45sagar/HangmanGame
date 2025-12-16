import getButtonStyling from "./getButtonStyling.js";

function Button({ text, onClickHandler, styleType = "primary", type="button" }) {

    return (
        <button 
            onClick={onClickHandler}
            type={type}
            className={`${getButtonStyling(styleType)} px-4 py-2 rounded-lg font-semibold transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0`}
        >
            {text}
        </button>
    );
}

export default Button;