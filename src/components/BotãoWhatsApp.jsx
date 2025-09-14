import React,{useState} from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import '../Styles/BotaoWhatsapp.css';

function WhatsAppButton() {

    const  myphone = '558196881853';
    const menssage = "olá,gostaria de realizar uma encomanda"

    const handleClick = ()=>{
     const encodedMessage = encodeURIComponent(menssage);
    const whatsappUrl = `https://wa.me/${myphone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    }
  return (
  <button onClick={handleClick} className="whatsApp">
   <BsFillTelephoneFill className="icon" />
   WhatsApp
  </button>
    );
}
export default WhatsAppButton