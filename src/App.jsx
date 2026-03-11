import "./App.css";
import bgImage from "./assets/casa.jpg";
import pagelogo from "./assets/nexora.png";

export default function App() {
  return (
    <div className="landing" style={{ backgroundImage: `url(${bgImage})` }}>
      
      {/* MENU SUPERIOR */}
      <div className="header">
        <img src={pagelogo} width="120" />

        <div className="infos">
          <a href="#">venda</a>
          <a href="#">informações</a>
          <a href="#">contatos</a>
        </div>

        <button
          className="agendar"
          onClick={() =>
            window.open(
              "https://store.steampowered.com/app/570/Dota_2/",
              "_blank"
            )
          }
        > 
          agendar
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      
      <button
          className="contato"
          onClick={() =>
            window.open(
              "https://web.whatsapp.com",
              "_blank"
            )
          }
        >
          📞
        </button>
    </div>
  );
}
