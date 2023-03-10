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
      <div style={{flex: 1, width: "100%", backgroundColor: "white",
    }}>
     <div className="div">
     <div className="div2"><img className="gif" src={img} alt="Capa" /></div>
     <div className="div3"> 
     <input
            className="input"
            type="text"
            value={filtro}
            onChange={handleFiltroChange}
            placeholder="Pesquisar seu produto"
          />
     <img className="image" src="https://github.com/Eliabesilva317.png" alt=" foto do Eliabe olhando para você de camisa preta" />
     </div>

     </div>
     </div>

        <div style={{flex:9, width: "100%"}}>
      <div className="div14">

        </div>
      </div>

    </div>
  );
}

export default Home;
