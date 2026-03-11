import React, { useState } from "react";
import "./App.css";
import bgImage from "./assets/casa.jpg";

export default function App() {
  // Estado para controlar se o usuário quer Comprar ou Alugar
  const [abaAtiva, setAbaAtiva] = useState("comprar");

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
  };

  return (
    <div className="landing" style={backgroundStyle}>
      
      {/* HEADER (Seu original com animação) */}
      <div className="header">

        <div className="infos">
          <a href="#">venda</a>
          <a href="#">informações</a>
          <a href="#">contatos</a>
        </div>

        <button
          className="agendar"
          onClick={() => window.open("https://wa.me/seunumeroaqui", "_blank")}
        >
          agendar
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL (Configurado como Imobiliária) */}
      <div className="main-content">
        <div className="search-container">
          
          {/* SELETOR DE CATEGORIA */}
          <div className="tabs">
            <button 
              className={abaAtiva === "comprar" ? "tab-btn active" : "tab-btn"} 
              onClick={() => setAbaAtiva("comprar")}
            >
              Comprar
            </button>
            <button 
              className={abaAtiva === "alugar" ? "tab-btn active" : "tab-btn"} 
              onClick={() => setAbaAtiva("alugar")}
            >
              Alugar
            </button>
          </div>

          {/* CAIXA DE BUSCA COM SELECT DE LOCALIZAÇÃO */}
          <div className="search-box">
            <div className="field-group">
              <label>Localização</label>
              <select className="select-imobiliaria">
                <option value="">Selecione a cidade...</option>
                <option value="sp">São Paulo - SP</option>
                <option value="rj">Rio de Janeiro - RJ</option>
                <option value="curitiba">Curitiba - PR</option>
              </select>
            </div>

            <div className="field-group">
              <label>Tipo de Imóvel</label>
              <select className="select-imobiliaria">
                <option value="casa">Casa</option>
                <option value="ap">Apartamento</option>
                <option value="lote">Terreno</option>
              </select>
            </div>

            <button className="btn-buscar-main"
            onClick={() => window.open("https://www.google.com/maps/place/Campinas,+SP/@-22.8920329,-47.2327054,11z/data=!3m1!4b1!4m6!3m5!1s0x94c8c61de74b6325:0x17e53a6a2178c22a!8m2!3d-22.9099384!4d-47.0626332!16s%2Fg%2F11bc5dx5jy?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D", "_blank")}
            >BUSCAR</button>
          </div>
        </div>
      </div>

      {/* BOTÃO DE CONTATO (Seu original) */}
      <button
        className="contato"
        onClick={() => window.open("https://web.whatsapp.com", "_blank")}
      >
        📞
      </button>
    </div>
  );
}