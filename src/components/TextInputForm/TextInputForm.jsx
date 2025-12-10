import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}) {

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
            <TextInput 
                type={inputType}
                label={"Enter a word or phrase"}
                placeholder={"Enter a word or phrase here ..."}
                onChangeHandler={handleTextInputChange}
            />
            </div>

            <div>
                <Button 
                    styleType={"warning"}
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button 
                    type={"submit"}
                    text={"Submit"} 
                    styleType={"primary"} 
                    onClickHandler={() => console.log("Submitted")} 
                />  
            </div>

        </form>
    )
}

export default TextInputForm;