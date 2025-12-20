function getButtonStyling(styleType) {
    if (styleType === "primary") {
        return "text-white bg-orange-500 hover:bg-orange-400 active:bg-orange-600 shadow-lg shadow-orange-500/30";
    } else if (styleType === "secondary") {
        return "text-slate-900 bg-slate-200 hover:bg-slate-100 active:bg-slate-300 shadow-md";
    } else if(styleType === "error"){
        return "text-white bg-red-500 hover:bg-red-400 active:bg-red-600 shadow-lg shadow-red-500/30";
    }else if(styleType === "success"){
        return "text-white bg-green-500 hover:bg-green-400 active:bg-green-600 shadow-lg shadow-green-500/30";
    } else if(styleType === "warning"){
        return "text-white bg-amber-500 hover:bg-amber-400 active:bg-amber-600 shadow-lg shadow-amber-500/30";
    } 
}

export default getButtonStyling;