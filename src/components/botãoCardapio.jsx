import { BiSolidFoodMenu } from "react-icons/bi";
import '../Styles/BotaoCardapio.css';


function MenuButton() {

    const pdfUrl = './src/assets/menu.pdf';

    const handleClick = () =>{
        window.open(pdfUrl, '_blank');
    }

    return(
        <button onClick={handleClick} className="Cardapio">
          <BiSolidFoodMenu  className="icon"/> cardapio
        </button>
    )
}

export default MenuButton;