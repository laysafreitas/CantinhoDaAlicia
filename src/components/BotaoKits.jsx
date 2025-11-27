import { BiFoodMenu } from "react-icons/bi";
import '../Styles/BotaoKit.css';


function KitButton() {

    const pdfUrl = './Kits_menu.pdf';

    const handleClick = () =>{
        window.open(pdfUrl, '_blank');
    }

    return(
        <button onClick={handleClick} className="Kit">
        <BiFoodMenu className="icon" /> kites
        </button>
    )
}

export default KitButton;