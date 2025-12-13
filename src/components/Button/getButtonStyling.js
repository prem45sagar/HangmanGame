function getButtonStyling(styleType) {
    if (styleType === "primary") {
        return "text-white bg-orange-500 px-4 py-2 ";
    } else if (styleType === "secondary") {
        return "text-black bg-gray-300 px-4 py-2 ";
    } else if(styleType === "error"){
        return "text-white bg-red-500 px-4 py-2 ";
    }else if(styleType === "success"){
        return "text-white bg-green-500 px-4 py-2 ";
    } else if(styleType === "warning"){
        return "text-white bg-yellow-500 px-4 py-2 ";
    } 
}

export default getButtonStyling;