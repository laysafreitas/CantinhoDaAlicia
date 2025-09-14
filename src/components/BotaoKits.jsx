import React from "react";
import { BiFoodMenu } from "react-icons/bi";
import '../Styles/BotaoKit.css';


function KitButton() {

    const pdfUrl = '';

    const handleClick = () =>{
        window.open(pdfUrl, '_blank');
    }

    return(
        <button onClick={handleClick} className="Kit">
        <BiFoodMenu className="icon" /> kit festa
        </button>
    )
}

export default KitButton;