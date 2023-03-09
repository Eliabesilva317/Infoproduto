import React, { useState } from "react";
import "../Home/index.css";
import img from "../../assets/foguete.gif";

function Home() {
  const [itens, setItens] = useState([
    { id: 1, nome: "Item 1" },
    { id: 2, nome: "Item 2" },
    { id: 3, nome: "Item 3" },
    { id: 4, nome: "Item 4" },
    { id: 5, nome: "Item 5" },
    { id: 6, nome: "Item 6" },
  ]);

  const [filtro, setFiltro] = useState("");

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      
      <div className="div">
      <img className="perfil"
          src="https://github.com/Eliabesilva317.png"
          alt=" foto do Eliabe olhando para você de camisa preta"
        />
        <input
          type="text"
          className="input2"
          value={filtro}
          onChange={handleFiltroChange}
          placeholder="Pesquisar produto"
        />
        <img className="gif" src={img} alt="Capa" />
      </div>

      {/* <ul>
        {itensFiltrados.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
