function TextInput({ type = "text", label, placeholder = "Enter your input here", onChangeHandler, value }) {

    return (
        <label className="block space-y-2">
            <span className="text-slate-200 text-sm">{label}</span>
            <input 
                type={type} 
                className="px-4 py-2 border border-slate-600 bg-slate-900 text-slate-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition" 
                placeholder={placeholder}
                onChange={onChangeHandler}
                value={value}
            />
        </label>

    )
}

export default TextInput;