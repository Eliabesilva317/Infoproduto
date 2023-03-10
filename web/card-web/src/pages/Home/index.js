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
      {/* <ul>
        {itensFiltrados.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
