import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({ wordValue, wordHint, wordInputType, handleFormSubmit, handleWordValueChange, handleWordHintChange, handleToggleWordVisibility }) {

    return (
        <form onSubmit={handleFormSubmit} className="stack-md">
            <div>
                <div className="flex items-end gap-2">
                    <div className="flex-1">
                        <TextInput 
                            type={wordInputType}
                            label={"Enter Word Value"}
                            placeholder={"Type the word to guess"}
                            onChangeHandler={handleWordValueChange}
                            value={wordValue}
                        />
                    </div>
                    <Button 
                        type="button"
                        styleType={"warning"}
                        text={wordInputType === "password" ? "Show" : "Hide"}
                        onClickHandler={handleToggleWordVisibility}
                    />
                </div>
            </div>

            <div>
                <TextInput 
                    type="text"
                    label={"Enter Word Hint"}
                    placeholder={"Type a hint for this word"}
                    onChangeHandler={handleWordHintChange}
                    value={wordHint}
                />
            </div>

            <div>
                <Button 
                    type={"submit"}
                    styleType={"primary"}
                    text={"Start Multiplayer"} 
                />  
            </div>
        </form>
    );
}

export default TextInputForm;