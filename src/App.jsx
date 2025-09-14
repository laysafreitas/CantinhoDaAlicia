import './App.css'
import './Styles/calda.css';
import './Styles/titulo.css';
import WhatsAppButton from './components/BotãoWhatsApp';
import MenuButton from './components/botãoCardapio';
import KitButton from './components/BotaoKits';
import titulo from './assets/titulo.png';


function App() {
  return (
    <>
     <div className='container '>
      <img src={titulo}  className='logo-sobre-calda '></img>
   <div class="slime">
  <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
    <defs>
      <linearGradient id="slimeGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#6ae076"/>
        <stop offset="100%" stop-color="#43C46B"/>
      </linearGradient>
    </defs>
    <path d="M0,0 
             L0,80 
             C150,120 250,40 360,100 
             C420,140 520,60 600,110 
             C700,160 820,80 960,120 
             C1050,150 1200,90 1200,90 
             L1200,0 Z" 
          fill="url(#slimeGradient)"></path>
  </svg>
</div>
      <WhatsAppButton/>
      <MenuButton/>
      <KitButton/>

     </div>
    </>
  )
}

export default App
